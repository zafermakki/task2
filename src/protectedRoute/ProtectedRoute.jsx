import React from "react";
import { Navigate } from "react-router";
import { getUserRole } from "../utils/auth";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const role = getUserRole();

  if (!role) return <Navigate to="/login" />;

  if (!allowedRoles.includes(role)) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
