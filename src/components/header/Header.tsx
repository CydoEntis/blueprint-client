import React from "react";
import Button from "../buttons/Button";

type Props = {
  title: string;
  description: string;
  onClick?: () => void;
  buttonText?: string;
};

const Header = ({ title, description, onClick, buttonText }: Props) => {
  return (
    <div className="p-5">
      <div className="flex w-full items-center justify-between border-b-2 border-off-white-20 pt-5 pb-8">
        <div>
          <h1 className="text-2xl font-bold text-grey-40 ">{title}</h1>
          <p className="py-1 text-xs text-grey-20">{description}</p>
        </div>
        {buttonText && (
          <Button
            type="button"
            className="border-accent-30 bg-accent-10 py-2 px-5 text-accent-40  hover:bg-accent-40 hover:text-white"
            onClick={onClick}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
