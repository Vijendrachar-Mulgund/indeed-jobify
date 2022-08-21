import axios from "./../../../axios";

export function loginUser(context) {
  return axios.post("auth/login", context.payload);
}
