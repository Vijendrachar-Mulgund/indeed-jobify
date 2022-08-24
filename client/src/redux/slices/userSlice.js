import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const setUserAction = (state, action) => {
  const userData = action.payload;

  if (userData) {
    // Set the user token to localstorage
    localStorage.setItem("auth-token", userData?.token);
    console.log("Entered block 1 -> ", userData);
    return { ...state, ...userData };
  } else {
    console.log("Entered block 2 -> ", initialState);
    return initialState;
  }
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

    reset: () => initialState,
  },
});

export const { setUser, userLogin, userSignUp, userAutoAuth, userLogOut, reset } = userSlice.actions;

export default userSlice.reducer;
