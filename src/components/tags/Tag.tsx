import React from "react";

type Props = {
  color: string;
  text: string;
};

const Tag = ({ color, text }: Props) => {
  return (
    <span
      className={`rounded-full py-1 px-3 bg-${color}-450 text-xs text-white`}
    >
      {text}
    </span>
  );
};

export default Tag;
