import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Detail = ({ children, className}: Props) => {
  return <div className={`${className} px-2 py-1 mb-2 flex items-center text-grey-20 capitalize`}>{children}</div>;
};

export default Detail;
