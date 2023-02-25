import React from "react";
import { CgCloseR } from "react-icons/cg";

type Props = {
  className?: string;
  count: number;
  text: string;
};

const StatsBlock = ({ className, count, text }: Props) => {
  return (
    <div
      className={`${className} w-full md:w-[calc(33%-10px)] items-center justify-center rounded-md border-t-8 p-5 text-center min-h-[180px]`}
    >
      <h1 className="text-[3rem] font-bold">{count}</h1>
      <p className="text-2xl capitalize">{text}</p>
    </div>
  );
};

export default StatsBlock;
