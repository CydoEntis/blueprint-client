import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const FormControl = ({ className, children }: Props) => {
  return <div className={`${className} flex w-full flex-col`}>
    {children}
    </div>;
};

export default FormControl;
