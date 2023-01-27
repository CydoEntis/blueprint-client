import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-off-white-20">
      {children}
    </div>
  );
};

export default AuthWrapper;
