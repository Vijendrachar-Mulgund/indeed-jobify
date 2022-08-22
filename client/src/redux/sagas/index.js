import { all, takeLatest } from "redux-saga/effects";
import { userLogin, userSignUp, userAutoAuth } from "../slices/userSlice";
import { handleUserLogin, handleUserSignUp, handleAutoAuthenticate } from "./handlers/userHandler";

export default function* rootSagas() {
  yield all([takeLatest(userLogin.type, handleUserLogin)]);
  yield all([takeLatest(userSignUp.type, handleUserSignUp)]);
  yield all([takeLatest(userAutoAuth.type, handleAutoAuthenticate)]);
}
