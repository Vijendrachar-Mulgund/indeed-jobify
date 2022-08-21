import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const setUserAction = (state, action) => {
  const userData = action.payload;

  localStorage.setItem("auth-token", userData.token);

  return { ...state, ...userData };
};

const userLoginAction = () => {};

const userSignUpAction = () => {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: setUserAction,
    userLogin: userLoginAction,
    userSignUp: userSignUpAction,
  },
});

export const { setUser, userLogin, userSignUp } = userSlice.actions;

export default userSlice.reducer;
