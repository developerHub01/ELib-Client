import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" replace={true} />;

  return children;
};

export default PrivateRoute;
