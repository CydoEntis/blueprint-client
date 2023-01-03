import React from "react";

type Props = {
  count: number;
  text: string;
  isFocused?: boolean;
};

const StatsBlock = ({ count, text, isFocused = false }: Props) => {
  let appliedClass: string = "";

  if (isFocused) {
    appliedClass =
      "flex h-32 w-5/12 flex-col items-center justify-center rounded-lg bg-indigo-500 font-bold text-white drop-shadow-md";
  } else {
    appliedClass =
      "flex h-32 w-5/12 flex-col items-center justify-center rounded-lg bg-white font-bold drop-shadow-md";
  }

  return (
    <div className={appliedClass}>
      <h1>{count}</h1>
      <p>{text}</p>
    </div>
  );
};

export default StatsBlock;
