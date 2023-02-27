import { Navigate } from "react-router-dom";
import React from "react";
import { useAppSelector } from "@/store/store";

type Props = {
  children: JSX.Element;
};

const ProtectedRoutes = ({ children }: Props) => {
  const token = useAppSelector((state) => state.user.token);

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
