import { all, takeLatest } from "redux-saga/effects";
import { userLogin, userSignUp, userAutoAuth, userAuth, userLogOut } from "../slices/userSlice";
import {
  handleUserLogin,
  handleUserSignUp,
  handleAutoAuthenticate,
  handleUserAuth,
  handleLogOut,
} from "./handlers/userHandler";

export default function* rootSagas() {
  yield all([takeLatest(userLogin.type, handleUserLogin)]);
  yield all([takeLatest(userSignUp.type, handleUserSignUp)]);
  yield all([takeLatest(userAuth.type, handleUserAuth)]);
  yield all([takeLatest(userAutoAuth.type, handleAutoAuthenticate)]);
  yield all([takeLatest(userLogOut.type, handleLogOut)]);
}
