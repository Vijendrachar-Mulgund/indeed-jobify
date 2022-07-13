import { call, put } from "redux-saga/effects";
import { requestGetUser } from "../requests/userRequests";
import { setUser } from "../../slices/userSlice";

export function* handleGetUser() {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    console.log("The response -> ", data);
    yield put(setUser(data));
  } catch (error) {
    console.error(error);
  }
}
