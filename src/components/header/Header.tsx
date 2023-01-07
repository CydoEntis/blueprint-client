import React from "react";

type Props = {
  title: string;
  description: string;
  onClick: () => void;
  buttonText: string;
};

const Header = ({ title, description, onClick, buttonText }: Props) => {
  return (
    <div className="flex items-center justify-between border-b-2 border-off-white-20 pt-5 pb-8">
      <div>
        <h1 className="text-2xl font-bold text-grey-40 ">{title}</h1>
        <p className="py-1 text-xs text-grey-20">{description}</p>
      </div>
      <button
        className="rounded-xl bg-accent-40 px-5 py-3 text-sm font-bold text-white"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Header;
