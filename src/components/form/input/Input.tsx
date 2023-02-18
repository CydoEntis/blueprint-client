import React from "react";

type Props = {
  type: string;
};

const Input = ({ type }: Props) => {
  return (
    <input
      className="rounded-md bg-off-white px-3 py-1 outline-blue-40"
      type={type}
    />
  );
};

export default Input;
