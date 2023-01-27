import AuthWrapper from "../AuthWrapper";
import React from "react";
import RegisterForm from "./RegisterForm";

type Props = {};

const Register = (props: Props) => {
  return (
    <AuthWrapper>
      <RegisterForm />
    </AuthWrapper>
  );
};

export default Register;
