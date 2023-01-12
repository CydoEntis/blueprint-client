import React, { DetailedHTMLProps, LabelHTMLAttributes } from "react";

type Props = {
  className?: string;
  id: string;
  children: React.ReactNode;
};

const Label = ({ className, id, children }: Props) => {
  return (
    <label className={`${className} text-grey-30`} htmlFor={id}>
      {children}
    </label>
  );
};

export default Label;
