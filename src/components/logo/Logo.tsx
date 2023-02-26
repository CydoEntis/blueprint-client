import React from "react";

type Props = { className?: string };

const Logo = ({ className }: Props) => {
  return (
    <h1
      className={`${className} text-center text-2xl font-bold text-accent-40`}
    >
      Blueprint
    </h1>
  );
};

export default Logo;
