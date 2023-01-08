import React from "react";
import TaskLink from "./TaskLink";

type Props = {
  id: number;
  onClick: () => void;
  count: number;
};

const TaskNav = ({ id, onClick, count }: Props) => {
  return (
    <nav className="w-full px-5">
      <ul className="flex h-full w-1/3 justify-between text-grey-40">
        <TaskLink to={`tasks/all`} text="All" count={50} />
        <TaskLink to={`tasks/in-progress`} text="In Progress" count={22} />
        <TaskLink to={`tasks/in-review`} text="In Review" count={10} />
        <TaskLink to={`tasks/completed`} text="Completed" count={5} />
        <TaskLink to={`tasks/bugs`} text="Bugs" count={3} />
        <TaskLink to={`tasks/past-due`} text="Past Due" count={1} />
      </ul>
    </nav>
  );
};

export default TaskNav;
