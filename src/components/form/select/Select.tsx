import React from "react";

interface IOption {
  id: number;
  value: string;
}

interface Props {
    options: IOption[];
}

const Select = ({ options }: Props) => {
  return (
    <select className="rounded-md bg-off-white px-3 py-2 outline-blue-40 capitalize">
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
