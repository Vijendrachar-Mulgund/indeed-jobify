import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSagas from "../sagas";
import user from "./../slices/userSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSagas);
