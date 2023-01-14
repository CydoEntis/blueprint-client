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
      className={`${className} rounded-xl border`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
