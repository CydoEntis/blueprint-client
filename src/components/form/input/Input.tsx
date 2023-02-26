import React from "react";

type Props = {
  type: string;
  value?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, value, name, onChange }: Props) => {
  return (
    <input
      className="rounded-md bg-off-white px-3 py-1 outline-blue-40 dark:bg-zinc-700"
      onChange={onChange}
      name={name}
      type={type}
      value={value}
    />
  );
};

export default Input;
