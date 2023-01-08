import React from "react";

type Props = {};

const TaskNav = (props: Props) => {
  return (
    <nav className="w-full ">
      <ul className="h-full w-full">
        <li>All</li>
        <li>In Progress</li>
        <li>In Review</li>
        <li>Completed</li>
        <li>Bugs</li>
        <li>Overdue</li>
      </ul>
    </nav>
  );
};

export default TaskNav;
