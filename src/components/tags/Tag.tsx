import React from "react";

type Props = {
  text: string;
};

const Tag = ({ text }: Props) => {
  // TODO: Move out into custom hook.
  let color = "";
  if (text === "accepted") {
    color = "green";
  } else if (text === "declined") {
    color = "red";
  } else if (text === "pending") {
    color = "yellow";
  }

  return (
    <span
      className={`my-3 capitalize rounded-md py-1.5 px-3 bg-${color}-10 border border-${color}-30 text-md text-${color}-40`}
    >
      {text}
    </span>
  );
};

export default Tag;
