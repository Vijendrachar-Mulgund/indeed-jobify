import UserModel from "./../models/userModel.js";
import httpStatus from "../enums/httpStatusCodes.js";

import { validateDevice } from "./../utils/deviceManagement.js";
import { validateToken } from "./../utils/validateToken.js";
import { errorHandler } from "../utils/error.js";

import { getGoogleOAuthTokens, getGoogleUser } from "./../services/user-service.js";
import userModel from "./../models/userModel.js";

export const signUp = async (request, response, next) => {
  try {
    const { name, email, dateOfBirth, password, device } = request.body;

    const user = await UserModel.create({
      name,
      email,
      dateOfBirth: new Date(dateOfBirth),
      password,
      devices: [device],
    });

    // Generate the JWT token when the Data is written successfully to the Database
    const token = user.createUserToken(device.deviceId);

    // Create a duplicate object and remove the PASSWORD before sending the response
    const userData = { ...user?._doc };
    delete userData["password"];

    // Create and send the JWT via a cookie
    response.cookie("auth_token", token, {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: request.secure || request.headers["x-forwarded-proto"] === "https",
    });

    // Send the response back to the client
    response.status(httpStatus.created).json({
      status: "success",
      user: userData,
    });
  } catch (error) {
    errorHandler(httpStatus.badRequest, error, next);
  }
};

export const login = async (request, response, next) => {
  try {
    const { email, password, device } = request.body;

    // Get the user record from the DB. With password
    const user = await UserModel.findOne({ email }).select("+password");

    // Throw the error if the User does not exist
    if (!user) {
      throw new Error("We could not find your records, Please Signup!");
    }

    // Check if the user account is active
    if (!user?.isActive) {
      throw new Error("This account is not Active, Please Activate!");
    }

    // Validate the Password
    const checkPassword = await user.validateUserPassword(password, user.password);

    if (!checkPassword) {
      throw new Error("Incorrect password. Please try again!");
    }

    // check for device payload
    if (!device) {
      throw new Error("Please add your device details!");
    }

    // Check for Device limitation
    const checkDevice = await validateDevice(device, user);

    if (checkDevice && typeof checkDevice === "string") {
      throw new Error(checkDevice);
    }

    // If all the validations are cleared, Then we can create the token and send response
    const token = await user.createUserToken(device.deviceId);

    // Create a duplicate object and remove the PASSWORD before sending the response
    const userData = { ...user?._doc };
    delete userData["password"];

    // Create and send the JWT via a cookie
    response.cookie("auth_token", token, {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: request.secure || request.headers["x-forwarded-proto"] === "https",
    });

    // Send the response for user object
    response.status(httpStatus.success).json({
      status: "success",
      user: userData,
    });
  } catch (error) {
    errorHandler(httpStatus.badRequest, error, next);
  }
};

export const autoAuthenticate = async (request, response, next) => {
  try {
    const { cookie } = request.headers;

    // Extract the token for the header
    const auth = cookie.split("=");

    // Check if the cookie contains the Auth token
    if (auth[0] !== "auth_token") {
      throw new Error("The token is not valid! Please login again!");
    }

    // Assign the token value
    const token = auth[1];

    // Validate the JWT and if valid, get the user Id
    const { id, deviceId } = validateToken(token);

    if (!id || !deviceId) {
      throw new Error("The token is not valid! Please login again!");
    }

    // Get the user from the database
    const user = await UserModel.findById(id);

    if (!user) {
      throw new Error("The User does not exist! Please login again!");
    }

    const isDeviceAvailable = user.devices.find((device) => device.deviceId === deviceId);

    // If the Device id in the JWT does not match the user's devices. Send Error response
    if (!isDeviceAvailable) {
      throw new Error("The token is not valid! Please login again!");
    }

    // Send the response with the user data
    response.status(httpStatus.success).json({
      status: "success",
      user,
    });
  } catch (error) {
    errorHandler(httpStatus.unauthorized, error, next);
  }
};

export const googleOAuthHandler = async (request, response, next) => {
  try {
    const code = request?.query?.code;

    // Get the google tokens
    const { id_token, access_token } = await getGoogleOAuthTokens({ code });

    // Get the google user with the tokens
    const googleUser = await getGoogleUser({ id_token, access_token });

    // Upsert the user into the database
    let gUser = await userModel.findOneAndUpdate(
      { googleId: googleUser?.id },
      {
        email: googleUser?.email,
        name: googleUser?.name,
        googleId: googleUser?.id,
        isVerifiedAccount: googleUser?.verified_email,
        displayPicture: googleUser?.picture,
        signInMethod: "google",
      },
      { upsert: true, returnDocument: true },
    );

    // For the first time when the user is inserted, the data is not returned, Hence need to get the user
    if (!gUser) {
      gUser = await userModel.findOne({ googleId: googleUser?.id });
    }

    // If all the validations are cleared, Then we can create the token and send response
    const token = await gUser.createUserToken();

    // Create and send the JWT via a cookie
    response.cookie("auth_token", token, {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: request.secure || request.headers["x-forwarded-proto"] === "https",
    });

    // Construct the URL for redirection
    const redirectUrl = `${process.env.CLIENT_REDIRECT_URL}?login=google`;

    // Redirect the client
    response.redirect(redirectUrl);
  } catch (error) {
    errorHandler(httpStatus.badRequest, error, next);
  }
};

export const authenticate = async (request, response, next) => {
  try {
    const { cookie } = request.headers;
    const { device } = request.body;

    // Extract the token for the header
    const auth = cookie.split("=");

    // Check if the cookie contains the Auth token
    if (auth[0] !== "auth_token") {
      throw new Error("The token is not valid! Please login again!");
    }

    // Assign the token value
    const token = auth[1];

    // Validate the JWT and if valid, get the user Id
    const { id } = validateToken(token);

    if (!id) {
      throw new Error("The token is not valid! Please login again!");
    }

    // Get the user from the database
    const user = await UserModel.findById(id);

    if (!user) {
      throw new Error("The User does not exist! Please login again!");
    }

    // Check for Device limitation
    const checkDevice = await validateDevice(device, user);

    if (checkDevice && typeof checkDevice === "string") {
      throw new Error(checkDevice);
    }

    // If all the validations are cleared, Then we can create the token and send response
    const refreshedToken = await user.createUserToken(device.deviceId);

    // Create and send the JWT via a cookie
    response.cookie("auth_token", refreshedToken, {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: request.secure || request.headers["x-forwarded-proto"] === "https",
    });

    // Send the response with the user data
    response.status(httpStatus.success).json({
      status: "success",
      user,
    });
  } catch (error) {
    errorHandler(httpStatus.badRequest, error, next);
  }
};

export const logout = async (request, response, next) => {
  try {
    response.status(httpStatus.success).clearCookie("auth_token").json({
      status: "success",
    });
  } catch (error) {
    errorHandler(httpStatus.badRequest, error, next);
  }
};
