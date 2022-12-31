import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="ml-28 flex w-4/6 flex-col px-5 pt-12">{children}</div>;
};

export default Layout;
