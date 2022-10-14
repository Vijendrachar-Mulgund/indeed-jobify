import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, user }) => {
  const userId = localStorage.getItem("user-id");

  // useEffect(() => {
  if (user?.user?._id) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
  // }, [user]);

  // return children;
};

export default AuthGuard;
