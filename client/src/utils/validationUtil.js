export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

// Form validation for Sign up and Login forms (only valid for ant-design forms)
export const emailValidation = async (_, value) => {
  if (validateEmail(value)) {
    return Promise.resolve();
  } else {
    return Promise.reject();
  }
};

export const validatePassword = async (_, value) => {
  if (value?.length >= 8) {
    return Promise.resolve();
  } else {
    return Promise.reject();
  }
};
