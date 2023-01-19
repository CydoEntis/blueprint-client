import React from "react";

type Props = {
  children: React.ReactNode;
};

const StatsContainer = ({ children }: Props) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export default StatsContainer;
