import React from "react";

type Props = {
  onSubmit: () => void;
  children: React.ReactNode;
};

const Form = ({ onSubmit, children }: Props) => {
  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;