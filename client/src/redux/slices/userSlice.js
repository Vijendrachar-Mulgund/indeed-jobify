import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const setUserAction = (state, action) => {
  const userData = action.payload;

  if (userData) {
    // Set the user to local storage
    localStorage.setItem("user-id", userData?.user?._id);

    return { ...state, ...userData };
  } else {
    return initialState;
  }
};

const userLoginAction = () => {};

const userSignUpAction = () => {};

const userAutoAuthAction = () => {};

const userLogOutAction = () => {};

const userGoogleLoginAction = () => {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: setUserAction,
    userLogin: userLoginAction,
    userGoogleLogin: userGoogleLoginAction,
    userSignUp: userSignUpAction,
    userAutoAuth: userAutoAuthAction,
    userLogOut: userLogOutAction,
  },
});

export const { setUser, userLogin, userGoogleLogin, userSignUp, userAutoAuth, userLogOut, reset } = userSlice.actions;

export default userSlice.reducer;
