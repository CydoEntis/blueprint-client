import React from "react";

type Props = {
  type: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, value, onChange }: Props) => {
  return (
    <input
      className="rounded-md bg-off-white px-3 py-1 outline-blue-40"
      onChange={onChange}
      type={type}
      value={value}
    />
  );
};

export default Input;
