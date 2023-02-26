import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  return (
    <div className="flex h-screen w-full bg-off-white-20 md:items-center md:justify-center dark:bg-zinc-900">
      {children}
    </div>
  );
};

export default AuthWrapper;
