import React from "react";

type Props = {
  className?: React.ReactNode;
  text: string;
};

const Typography = ({ className, text }: Props) => {
  return <h1 className={`${className} text-grey-30`}>{text}</h1>;
};

export default Typography;
