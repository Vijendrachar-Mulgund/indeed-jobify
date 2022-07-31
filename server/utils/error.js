export const newError = (statusCode, error) => {
  const err = new Error(error.message);
  err.code = statusCode;
  return err;
};

export const errorHandler = (statusCode, error, next) => {
  console.error("Error -> ", error);

  const err = {
    statusCode,
    message: "",
  };

  // Check for validation error and setup the message
  if (error?.name === "ValidationError") {
    Object.values(error.errors).forEach((errObject) => {
      err.message = err?.message ? err?.message + ", " + errObject.message : errObject.message;
    });
  }

  // Check for Unique key error
  if (error?.code === 11000) {
    Object.keys(error?.keyValue).forEach((errObject) => {
      err.message = err?.message
        ? err?.message + ", " + error?.keyValue[errObject] + " is already taken"
        : error?.keyValue[errObject] + " is already taken";
    });
  }

  next(err);
};
