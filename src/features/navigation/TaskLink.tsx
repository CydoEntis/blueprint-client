import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

type Props = {
  to: string;
  text: string;
  count: number;
};

const TaskLink = ({ to, text, count }: Props) => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const matchedPath = "tasks/" + pathParts[pathParts.length - 1];

  let textClasses = "flex items-center text-sm font-bold ";
  let countClasses =
    "ml-2 flex h-8 w-8 items-center justify-center rounded-lg   text-xs";

  if (to === matchedPath) {
    textClasses += " text-accent-40";
    countClasses += " border-accent-30 bg-accent-10 border text-accent-40";
  } else {
    textClasses += "text-grey-40";
    countClasses += "border-white bg-white";
  }
  return (
    <li className="mr-5">
      <Link className={textClasses} to={to}>
        {text}
        <span className={countClasses}>{count}</span>
      </Link>
    </li>
  );
};

export default TaskLink;
