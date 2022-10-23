export const errorHandlerMiddleware = (err, request, response, next) => {
  response.status(err?.statusCode).json({
    status: "fail",
    message: err?.message || "Something went wrong 😵",
  });
};
