import { Navigate } from "react-router-dom";
import React from "react";

type Props = {
  children: JSX.Element;
};

const ProtectedRoutes = ({ children }: Props) => {
  const user = null;
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
