import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogOut } from "./../redux/slices/userSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  return () => {
    try {
      // Remove the token
      localStorage.removeItem("auth-token");

      // Make the API call to invalidate the token
      dispatch(userLogOut());

      // Navigate the user back to the login page
      navigator("/login");
    } catch (error) {
      console.log("Error in logout ", error);

      // If there's an error, Navigate the user back to the login page and reload the page to clear the state
      navigator("/login");
      window.location.reload();
    }
  };
};
