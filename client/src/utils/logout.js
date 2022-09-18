import { withWarn } from "antd/lib/modal/confirm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogOut } from "./../redux/slices/userSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  return () => {
    // Make the API call to invalidate the token
    dispatch(userLogOut());

    console.log("This func was called");

    // Remove the token
    localStorage.removeItem("user-id");

    // Navigate the user back to the login page
    navigator("/login");

    // Reload the page
    window.location.reload();
  };
};
