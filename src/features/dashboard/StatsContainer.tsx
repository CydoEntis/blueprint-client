import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const StatsContainer = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>;
};

export default StatsContainer;
