export const notFoundMiddleware = (request, response, next) => {
  response.status(404).json({
    message: "The route you are looking for was not found ⛔️",
  });
};
