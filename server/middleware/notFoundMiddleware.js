import httpStatusCode from "./../enums/httpStatusCodes.js";

export const notFoundMiddleware = (request, response, next) => {
  response.status(httpStatusCode.notFound).json({
    message: "The route you are looking for was not found ⛔️",
  });
};
