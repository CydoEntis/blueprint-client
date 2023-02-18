import React from "react";

type Props = {
  children: React.ReactNode;
};

const Detail = ({ children }: Props) => {
  return <div className="mb-5 flex items-center text-grey-20 capitalize">{children}</div>;
};

export default Detail;
