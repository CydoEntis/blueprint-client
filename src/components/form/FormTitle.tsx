import React from "react";

type Props = {
  text: string;
};

const FormTitle = ({ text }: Props) => {
  return <h1 className="my-3 text-[1.75rem]">{text}</h1>;
};

export default FormTitle;
