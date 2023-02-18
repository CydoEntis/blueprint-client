import React from "react";

type Props = {
  className: string;
  text: string
};

const FormButton = ({ className, text }: Props) => {
  return (
    <button className={` rounded-md border sm:w-[200px] capitalize ${className}`}>
      {text}
    </button>
  );
};

export default FormButton;
