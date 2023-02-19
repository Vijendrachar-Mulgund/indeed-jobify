import { Outlet, Navigate } from "react-router-dom";

const AuthGuard = ({ user }) => {
  return user?._id ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
