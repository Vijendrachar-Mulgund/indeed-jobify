import axios from "axios";

const { REACT_APP_API_BASE_URL, REACT_APP_API_TIMEOUT } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
  timeout: REACT_APP_API_TIMEOUT,
});

export default instance;