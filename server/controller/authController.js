import { newError } from "./../utils/error.js";
import httpStatus from "./../enums/httpStatusCodes.js";

export const signUp = (request, response, next) => {
  throw newError(405, "This is the message");
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
