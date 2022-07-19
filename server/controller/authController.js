export const signUp = (request, response, next) => {
  response.status(200).json({
    message: "Signup response",
  });
};

export const login = (request, response, next) => {};

export const autoAuthenticate = (request, response, next) => {};
