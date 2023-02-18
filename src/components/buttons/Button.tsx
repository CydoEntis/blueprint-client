import React from "react";

type Props = {
  className?: string;
  type: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ className, type, onClick, children }: Props) => {
  return (
    <button
      className={`${className} rounded-md border transition-all duration-300 ease-in-out capitalize hover:opacity-75`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
