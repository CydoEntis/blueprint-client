import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  return (
    <div className="flex h-screen w-full bg-off-white-20 md:items-center md:justify-center">
      {children}
    </div>
  );
};

export default AuthWrapper;
