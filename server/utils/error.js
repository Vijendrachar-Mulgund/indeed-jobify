export const newError = (statusCode, message) => {
  const err = new Error(message);
  err.code = statusCode;
  return err;
};
