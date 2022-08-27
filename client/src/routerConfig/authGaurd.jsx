import { useEffect } from "react";

import { Navigate } from "react-router-dom";

const AuthGaurd = ({ childern, user }) => {
  useEffect(() => {
    return childern;
  }, [user]);

  if (!user?.user?._id) {
    return <Navigate to="/login"></Navigate>;
  }

  return childern;
};

export default AuthGaurd;
