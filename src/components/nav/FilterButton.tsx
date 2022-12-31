import React from "react";

type Props = {
  title: string;
  count: number;
};

const FilterButton = ({ title, count }: Props) => {
  return (
    <button className="flex items-center text-sm text-[#794BF4]">
      {title}
      <span className="ml-2 rounded-md bg-white py-0.5 px-2.5 text-xs text-gray-500 drop-shadow-md">
        {count}
      </span>
    </button>
  );
};

export default FilterButton;
