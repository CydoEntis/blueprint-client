import React from "react";

type Props = {
  title: string;
  count: number;
};

const FilterButton = ({ title, count }: Props) => {
  return (
    <button className="flex items-center border-b-2 py-5 text-sm  text-indigo-500 hover:border-b-2 hover:border-indigo-500">
      {title}
      <span className="ml-2 rounded-md bg-white py-0.5 px-2.5 text-xs text-gray-500 drop-shadow-md">
        {count}
      </span>
    </button>
  );
};

export default FilterButton;
