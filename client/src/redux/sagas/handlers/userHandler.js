import { call, put } from "redux-saga/effects";
import { loginUser, signUpUser } from "../requests/userRequests";
import { setUser } from "../../slices/userSlice";

import { message } from "antd";

export function* handleUserLogin(params) {
  try {
    const response = yield call(loginUser, params);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    message.error(error?.response?.data?.message);
    console.error("Login error ", error);
  }
}

export function* handleUserSignUp(params) {
  try {
    const response = yield call(signUpUser, params);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    message.error(error?.response?.data?.message);
    console.error("Sign up error", error);
  }
}
