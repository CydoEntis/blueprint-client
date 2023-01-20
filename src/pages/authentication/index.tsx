import AuthForm from "@/features/authentication/AuthForm";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-off-white-20">
      <AuthForm />
    </div>
  );
};

export default index;
