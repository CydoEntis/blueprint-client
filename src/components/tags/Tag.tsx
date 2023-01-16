import React from "react";

type Props = {
  text: string;
};

const Tag = ({ text }: Props) => {
  // TODO: Move out into custom hook.
  let color = "";
  if (text === "frontend") {
    color = "green";
  } else if (text === "backend") {
    color = "yellow";
  } else if (text === "ui/ux") {
    color = "purple";
  } else if (text === "security") {
    color = "blue";
  } else if (text === "testing") {
    color = "orange";
  } else if (text === "mobile") {
    color = "pink";
  }

  return (
    <span
      className={`rounded-full py-1 px-3 bg-${color}-10 border border-${color}-30 text-xs text-${color}-40`}
    >
      {text}
    </span>
  );
};

export default Tag;
