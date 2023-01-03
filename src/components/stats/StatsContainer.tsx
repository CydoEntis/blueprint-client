import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const StatsContainer = ({ title, children }: Props) => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
};

export default StatsContainer;
