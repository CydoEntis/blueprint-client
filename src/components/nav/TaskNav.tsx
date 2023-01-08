import React from "react";

type Props = {
  onClick: () => void;
  count: number;
};

const TaskNav = ({ onClick, count }: Props) => {
  return (
    <nav className="w-full px-5">
      <ul className="flex h-full w-1/3 justify-between text-grey-40">
        <li className="flex items-center" onClick={onClick}>
          All{" "}
          <span className="ml-2 rounded-lg border border-accent-30 bg-accent-10 px-3 py-1 text-xs">
            {count}
          </span>
        </li>
        <li className="flex items-center" onClick={onClick}>
          In Progress{" "}
          <span className="ml-2 rounded-lg border border-accent-30 bg-accent-10 px-3 py-1 text-xs">
            {count}
          </span>
        </li>
        <li onClick={() => console.log("first")}>
          In Review{" "}
          <span className="ml-2 rounded-lg border border-accent-30 bg-accent-10 px-3 py-1 text-xs">
            {count}
          </span>
        </li>
        <li className="flex items-center" onClick={onClick}>
          Completed{" "}
          <span className="ml-2 rounded-lg border border-accent-30 bg-accent-10 px-3 py-1 text-xs">
            {count}
          </span>
        </li>
        <li className="flex items-center" onClick={onClick}>
          Bugs{" "}
          <span className="ml-2 rounded-lg border border-accent-30 bg-accent-10 px-3 py-1 text-xs">
            {count}
          </span>
        </li>
        <li className="flex items-center" onClick={onClick}>
          Overdue{" "}
          <span className="ml-2 rounded-lg border border-accent-30 bg-accent-10 px-3 py-1 text-xs">
            {count}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default TaskNav;
