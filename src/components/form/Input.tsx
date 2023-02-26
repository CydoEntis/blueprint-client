import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

type Props = {
  className?: string;
  id: string;
  type: string;
  value: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; //TODO Make onChange required.
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  focused?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

const Input = ({ className, id, type, onChange, value, onBlur }: Props) => {
  return (
    <input
      className={`${className} rounded-lg bg-off-white p-2 outline-accent-30 dark:bg-zinc-700 dark:text-white`}
      id={id}
      type={type}
      name={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
