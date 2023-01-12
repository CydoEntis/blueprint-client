import React from "react";

type Props = {
  className?: string;
  type: string;
};

const Input = ({ className, type }: Props) => {
  return (
    <input
      className={`${className} mb-3 rounded-lg bg-off-white p-3 outline-accent-30`}
      type={type}
    />
  );
};

export default Input;
