import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const setUserAction = (state, action) => {
  const userData = action.payload;

  // Set the user token to localstorage
  localStorage.setItem("auth-token", userData.token);

  return { ...state, ...userData };
};

const userLoginAction = () => {};

const userSignUpAction = () => {};

const userAutoAuthAction = () => {};

const userLogOutAction = () => {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: setUserAction,
    userLogin: userLoginAction,
    userSignUp: userSignUpAction,
    userAutoAuth: userAutoAuthAction,
    userLogOut: userLogOutAction,
  },
});

export const { setUser, userLogin, userSignUp, userAutoAuth, userLogOut } = userSlice.actions;

export default userSlice.reducer;
