import React from "react";

type Props = {
  className?: string;
  count: number;
  text: string;
};

const StatsBlock = ({ className, count, text }: Props) => {
  return (
    <div className={className}>
      <h1>{count}</h1>
      <p>{text}</p>
    </div>
  );
};

export default StatsBlock;
