import React, { DetailedHTMLProps, LabelHTMLAttributes } from "react";

type Props = {
  className?: string;
  htmlFor: string;
  children: React.ReactNode;
};

const Label = ({ className, htmlFor, children }: Props) => {
  return (
    <label className={`${className} py-1 text-grey-30 dark:text-off-white`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
