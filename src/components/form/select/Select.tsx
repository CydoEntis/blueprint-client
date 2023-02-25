import React from "react";

interface IOption {
  id: number;
  value: string;
}

interface Props {
    options: IOption[];
    value?: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, value, name, onChange }: Props) => {
  return (
    <select name={name} value={value} className="rounded-md bg-off-white px-3 py-2 outline-blue-40 capitalize" onChange={onChange} >
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
