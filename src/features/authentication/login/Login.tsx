import AuthWrapper from "../AuthWrapper";
import LoginForm from "./LoginForm";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  );
};

export default Login;
