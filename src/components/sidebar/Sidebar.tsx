import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

const Sidebar = ({ children, className }: Props) => {
  return <article className={className}>{children}</article>;
};

export default Sidebar;
