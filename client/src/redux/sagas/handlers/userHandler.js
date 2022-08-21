import { call, put } from "redux-saga/effects";
import { loginUser } from "../requests/userRequests";
import { setUser } from "../../slices/userSlice";

export function* handleUserLogin(params) {
  try {
    const response = yield call(loginUser, params);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.error(error);
  }
}
