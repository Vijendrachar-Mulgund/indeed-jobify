import axios from "axios";

import { logout } from "./../utils/logout";
// import { message } from "antd";

const { REACT_APP_API_BASE_URL, REACT_APP_API_TIMEOUT } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
  timeout: REACT_APP_API_TIMEOUT,
});

instance.defaults.withCredentials = true;

instance.interceptors.response.use(
  (response) => {
    // Pass the Response forward
    return response;
  },
  (error) => {
    // The token is invalid, log the user out
    if (error?.response?.status === 401) {
      logout();
    }

    // Error handler for all the axios requests

    return error;
  },
);

export default instance;
