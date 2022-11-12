import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const setUserAction = (state, action) => {
  const userData = action.payload;

  if (userData?.user) {
    // Set the user to local storage
    localStorage.setItem("user-id", userData?.user?._id);

    return { ...state, ...userData.user };
  } else {
    return initialState;
  }
};

const userLoginAction = () => {};

const userSignUpAction = () => {};

const userAutoAuthAction = () => {};

const userAuthAction = () => {};

const userLogOutAction = () => {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: setUserAction,
    userLogin: userLoginAction,
    userSignUp: userSignUpAction,
    userAutoAuth: userAutoAuthAction,
    userAuth: userAuthAction,
    userLogOut: userLogOutAction,
  },
});

export const { setUser, userLogin, userSignUp, userAutoAuth, userAuth, userLogOut } = userSlice.actions;

export default userSlice.reducer;
