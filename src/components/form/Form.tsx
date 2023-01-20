import React from "react";

type Props = {
  className?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};

const Form = ({ className, onSubmit, children }: Props) => {
  return (
    <form className={`${className} flex flex-col`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
