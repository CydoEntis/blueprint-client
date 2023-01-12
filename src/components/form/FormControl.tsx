import React from "react";

type Props = {
  children: React.ReactNode;
};

const FormControl = ({ children }: Props) => {
  return <div className="flex flex-col p-3">{children}</div>;
};

export default FormControl;
