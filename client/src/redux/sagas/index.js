import { all, takeLatest } from "redux-saga/effects";
import { getUser } from "../slices/userSlice";
import { handleGetUser } from "./handlers/userHandler";

export default function* rootSagas() {
  yield all([takeLatest(getUser.type, handleGetUser)]);
}
