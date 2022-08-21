import { all, takeLatest } from "redux-saga/effects";
import { userLogin } from "../slices/userSlice";
import { handleUserLogin } from "./handlers/userHandler";

export default function* rootSagas() {
  yield all([takeLatest(userLogin.type, handleUserLogin)]);
}
