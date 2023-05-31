import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component}) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  console.log('Check is Authentication ', isAuthenticated);
  if (isAuthenticated && isAuthenticated === false ) {
    return <Navigate to="/login" replace />
  }
  return <Component />
};

export default ProtectedRoute;