import UserModel from "./../models/userModel.js";
import httpStatus from "../enums/httpStatusCodes.js";

import { validateDevice } from "./../utils/deviceManagement.js";
import { validateToken } from "./../utils/validateToken.js";

import { errorHandler } from "../utils/error.js";

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

    // Generate the JWT token when the Dats is written successfully to the Database
    const token = user.createUserToken();

    // Create a dublicate object and remove the PASSWORD before sending the response
    const userData = { ...user?._doc };
    delete userData["password"];

    // Create and send the JWT via a cookie
    response.cookie("jwt", token, {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: request.secure || request.headers["x-forwarded-proto"] === "https",
    });

    // Send the response back to the client
    response.status(httpStatus.created).json({
      status: "success",
      user: userData,
      token,
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
    const token = await user.createUserToken();

    // Create a dublicate object and remove the PASSWORD before sending the response
    const userData = { ...user?._doc };
    delete userData["password"];

    // Create and send the JWT via a cookie
    response.cookie("jwt", token, {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: request.secure || request.headers["x-forwarded-proto"] === "https",
    });

    // Send the response for user object
    response.status(httpStatus.success).json({
      status: "success",
      user: userData,
      token,
    });
  } catch (error) {
    errorHandler(httpStatus.badRequest, error, next);
  }
};

export const autoAuthenticate = async (request, response, next) => {
  try {
    const { authorization } = request.headers;

    // Extract the token for the header
    const token = authorization.split(" ")[1];

    // Validate the JWT and if valid, get the user Id
    const userId = validateToken(token);

    if (!userId) {
      throw new Error("The token is not valid! Please login again!");
    }

    // Get the user from the data
    const user = await UserModel.findById(userId);

    // Send the response with the user data
    response.status(httpStatus.success).json({
      status: "success",
      user,
      token,
    });
  } catch (error) {
    errorHandler(httpStatus.badGateway, error, next);
  }
};
