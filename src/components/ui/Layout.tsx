import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-fulll flex flex-col pt-12 md:ml-28  md:px-5">
      {children}
    </div>
  );
};

export default Layout;
