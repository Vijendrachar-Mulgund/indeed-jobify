export const errorHandlerMiddleware = (err, request, response, next) => {
  response.status(err?.statusCode).json({
    message: err?.message || "Something went wrong 😵",
  });
};
