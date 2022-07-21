export const errorHandlerMiddleware = (err, request, response, next) => {
  response.status(err.code).json({
    message: err.message || "Something went wrong 😵",
  });
};
