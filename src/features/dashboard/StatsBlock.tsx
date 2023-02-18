import React from "react";

type Props = {
  className?: string;
  count: number;
  text: string;
};

const StatsBlock = ({ className, count, text }: Props) => {
  return (
    <div
      className={`${className} w-[calc(33%-10px)] justify-center items-center rounded-md p-5 border-t-8`}
    >
      <h1 className="text-[2.5rem] font-bold">{count}</h1>
      <p className="text-lg capitalize">{text}</p>
    </div>
  );
};

export default StatsBlock;
