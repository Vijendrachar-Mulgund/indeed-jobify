// import { useDispatch } from "react-redux";
import { store } from "./../redux/store";
import { Navigate } from "react-router-dom";
import { userLogOut } from "./../redux/slices/userSlice";

export const logout = () => {
  // Make the API call to invalidate the token
  store.dispatch(userLogOut());

  // Navigate the user back to the login page
  return <Navigate to={"/login"}></Navigate>;
};
