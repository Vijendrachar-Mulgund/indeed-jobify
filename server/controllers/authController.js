import User from "./../models/userModel.js";

import { newError } from "../utils/error.js";
import httpStatus from "../enums/httpStatusCodes.js";

export const signUp = async (request, response, next) => {
  try {
    const user = await User.create(request.body);
    response.status(httpStatus.created).json({ user });
  } catch (error) {
    next(newError(httpStatus.badRequest, error.message));
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
