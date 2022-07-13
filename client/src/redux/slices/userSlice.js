import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const setUserAction = (state, action) => {
  const userData = action.payload;
  return { ...state, ...userData };
};
const getUserAction = () => {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: setUserAction,
    getUser: getUserAction,
  },
});

export const { setUser, getUser } = userSlice.actions;

export default userSlice.reducer;
