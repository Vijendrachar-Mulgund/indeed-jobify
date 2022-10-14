import { call, put } from "redux-saga/effects";
import { loginUser, signUpUser, autoAuthenticate, logoutUser } from "../requests/userRequests";
import { setUser } from "../../slices/userSlice";

import { removeData } from "./../../../utils/logout";

export function* handleUserLogin(params) {
  try {
    const response = yield call(loginUser, params);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.error("Login error ", error);
  }
}

export function* handleUserSignUp(params) {
  try {
    const response = yield call(signUpUser, params);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.error("Sign up error", error);
  }
}

export function* handleAutoAuthenticate() {
  try {
    const response = yield call(autoAuthenticate);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.error("Auto Login error", error);
  }
}

export function* handleLogOut() {
  try {
    const response = yield call(logoutUser);
    const { data } = response;
    if (data?.status === "success") {
      // Clear all data
      removeData();
    }
    yield put(setUser());
  } catch (error) {
    console.error("Logout error", error);
  }
}
