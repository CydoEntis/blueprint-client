import { Navigate } from "react-router-dom";
import React from "react";
import { useAppSelector } from "@/store/store";

type Props = {
  children: JSX.Element;
};

const ProtectedRoutes = ({ children }: Props) => {
  console.log("Protected route");
  // const user = useAppSelector((state) => state.user.user);
  const token = useAppSelector((state) => state.user.token);
  // console.log(user);
  console.log("Token: ", token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
