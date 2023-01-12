import React from "react";

type Props = {
  className?: string;
  id: string;
  type: string;
};

const Input = ({ className, id, type }: Props) => {
  return (
    <input
      className={`${className} mb-3 rounded-lg bg-off-white p-3 outline-accent-30`}
      id={id}
      type={type}
    />
  );
};

export default Input;
