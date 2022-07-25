import User from "./../models/userModel.js";

import { errorHandler } from "../utils/error.js";
import httpStatus from "../enums/httpStatusCodes.js";

export const signUp = async (request, response, next) => {
  try {
    const { name, email, dateOfBirth, password } = request.body;

    const user = await User.create({
      name,
      email,
      dateOfBirth: new Date(dateOfBirth),
      password,
    });
    response.status(httpStatus.created).json({ user });
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
