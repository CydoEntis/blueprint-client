import React from "react";

type Props = {
  children: React.ReactNode;
};

const FormControl = ({ children }: Props) => {
  return <div className="flex w-1/2 flex-col p-3">{children}</div>;
};

export default FormControl;
