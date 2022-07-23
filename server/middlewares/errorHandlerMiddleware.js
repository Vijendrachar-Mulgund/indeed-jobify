export const errorHandlerMiddleware = (err, request, response, next) => {
  response.status(500).json({
    message: err.message || "Something went wrong 😵",
  });
};
