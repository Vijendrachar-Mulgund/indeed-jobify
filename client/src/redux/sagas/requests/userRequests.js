import axios from "./../../../axios";

export function loginUser(payload) {
  return axios.post("auth/login", payload);
}
