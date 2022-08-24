import { call, put } from "redux-saga/effects";
import { loginUser, signUpUser, autoAuthenticate, logoutUser } from "../requests/userRequests";
import { setUser, reset } from "../../slices/userSlice";

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

export function* handleAutoAuthenticate() {
  try {
    const response = yield call(autoAuthenticate);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    message.error(error?.response?.data?.message);
    console.error("Auto Login error", error);
  }
}

export function* handleLogOut() {
  try {
    const response = yield call(logoutUser);
    yield put(reset);
  } catch (error) {
    message.error(error?.response?.data?.message);
    console.error("Logout error", error);
  }
}
