import { Navigate } from "react-router";
import React from "react";
const RequiresAuth = ({ children, isLoggedIn }) => {
  return isLoggedIn ? children : <Navigate to="/signin" />;
};

export default RequiresAuth;
