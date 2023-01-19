import React from "react";

type Props = {
  className?: React.ReactNode;
  text: string;
};

const Title = ({ className, text }: Props) => {
  return <h1 className={`${className} text-grey-30`}>{text}</h1>;
};

export default Title;
