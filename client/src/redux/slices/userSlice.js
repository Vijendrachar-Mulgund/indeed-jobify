import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const setUserAction = (state, action) => {
  const userData = action.payload;
  return { ...state, ...userData };
};

const userLoginAction = (data) => {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: setUserAction,
    userLogin: userLoginAction,
  },
});

export const { setUser, userLogin } = userSlice.actions;

export default userSlice.reducer;
