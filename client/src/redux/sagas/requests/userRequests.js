import axios from "./../../../axios";

export function loginUser(context) {
  return axios.post("auth/login", context.payload);
}

export function signUpUser(context) {
  return axios.post("auth/signup", context.payload);
}

export function autoAuthenticate() {
  return axios.get("auth/auto-authenticate");
}
