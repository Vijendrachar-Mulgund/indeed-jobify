import { all, takeLatest } from "redux-saga/effects";
import { userLogin, userSignUp } from "../slices/userSlice";
import { handleUserLogin, handleUserSignUp } from "./handlers/userHandler";

export default function* rootSagas() {
  yield all([takeLatest(userLogin.type, handleUserLogin)]);
  yield all([takeLatest(userSignUp.type, handleUserSignUp)]);
}
