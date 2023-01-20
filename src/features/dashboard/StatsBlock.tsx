import React from "react";

type Props = {
  className?: string;
  count: number;
  text: string;
};

const StatsBlock = ({ className, count, text }: Props) => {
  return (
    <div
      className={`${className} flex h-40 w-40 flex-col items-center justify-center rounded-xl border py-2 px-5`}
    >
      <h1 className="text-[2rem] font-bold">{count}</h1>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default StatsBlock;
