import React from "react";

type Props = {
  iconColor: string;
  title: string;
};

const Task = ({ iconColor, title }: Props) => {
  return (
    <li className="ml-3 cursor-pointer rounded-lg  py-1 px-2 hover:bg-gray-40">
      <div className="flex items-center">
        <div className={`mr-1 h-1 w-2 rounded-md bg-${iconColor}-450`}></div>
        <p>{title}</p>
      </div>
    </li>
  );
};

export default Task;
