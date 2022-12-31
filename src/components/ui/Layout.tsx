import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="ml-28 flex-col pt-12">{children}</div>;
};

export default Layout;
