import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSagas from "../sagas";
import userReducer from "./../slices/userSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSagas);
