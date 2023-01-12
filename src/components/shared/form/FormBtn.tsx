import React from "react";

type Props = {
  className?: string;
  type: "button" | "submit";
  text: string;
};

const FormBtn = ({ className, type, text }: Props) => {
  return (
    <button
      className={`${className} rounded-xl border border-accent-30 bg-accent-10 py-2 px-5 text-accent-40 hover:bg-accent-40 hover:text-white`}
      type={type}
    >
      {text}
    </button>
  );
};

export default FormBtn;
