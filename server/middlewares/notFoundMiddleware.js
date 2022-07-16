export const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({
    message: "The route you are looking for was not found ⛔️",
  });
};
