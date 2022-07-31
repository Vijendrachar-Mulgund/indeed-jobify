import UserModel from "./../models/userModel.js";

import { errorHandler } from "../utils/error.js";
import httpStatus from "../enums/httpStatusCodes.js";

export const signUp = async (request, response, next) => {
  try {
    const { name, email, dateOfBirth, password } = request.body;

    const user = await UserModel.create({
      name,
      email,
      dateOfBirth: new Date(dateOfBirth),
      password,
    });

    // Generate the JWT token when the Dats is written successfully to the Database
    const token = user.createUserToken();

    // Create a dublicate object and remove the PASSWORD before sending the response
    const userData = { ...user?._doc };
    delete userData["password"];

    response.status(httpStatus.created).json({
      status: "success",
      user: userData,
      token,
    });
  } catch (error) {
    errorHandler(httpStatus.badRequest, error, next);
  }
};

export const login = (request, response, next) => {
  response.status(httpStatus.success).json({
    message: "Login response",
  });
};

export const autoAuthenticate = (request, response, next) => {
  response.status(httpStatus.success).json({
    message: "Auto authenticate response",
  });
};
