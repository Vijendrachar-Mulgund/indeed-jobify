import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, user }) => {
  if (user?._id) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default AuthGuard;
