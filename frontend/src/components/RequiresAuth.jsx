import { Navigate, useLocation } from "react-router";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../main";

const RequiresAuth = ({ children}) => {
  let location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} />
  );
};

export default RequiresAuth;
