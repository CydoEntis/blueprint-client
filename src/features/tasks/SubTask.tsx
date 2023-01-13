import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import Task from "./Task";

type Props = {
  completed: boolean;
  description: string;
  deleteTaskHandler: (id: string) => void;
  id: string;
  completeTaskHandler: (id: string) => void;
};

const SubTask = ({
  completed,
  description,
  deleteTaskHandler,
  id,
  completeTaskHandler,
}: Props) => {
  let completedClasses = "";
  if (completed) {
    completedClasses = "bg-green-500  border-green-40";
  } else {
    completedClasses = "bg-transparent border-red-40";
  }
  return (
    <div
      className="flex items-center border-b border-gray-200 py-2 text-grey-40 "
      onClick={() => completeTaskHandler(id)}
    >
      <div
        className={`${
          completed ? "line-through" : ""
        } flex w-5/6 cursor-pointer items-center`}
      >
        <div
          className={`${completedClasses} mr-2 flex h-6 w-6 items-center justify-center rounded-lg border-2 text-white`}
        >
          {completed && <BsCheck className="h-5 w-5" />}
        </div>
        <h4>{description}</h4>
      </div>
      <div className="flex w-1/6 items-center justify-center">
        <button
          className="mr-2 rounded-lg border border-accent-30 bg-accent-10 p-1 text-accent-40 transition duration-200 ease-in-out hover:bg-accent-40 hover:text-white"
          type="button"
          onClick={() => {
            deleteTaskHandler(id);
          }}
        >
          <FiEdit2 className="text-xl" />
        </button>
        <button
          className="rounded-lg border border-red-40 bg-red-100 p-1 text-red-40 transition duration-200 ease-in-out hover:bg-red-40 hover:text-white"
          type="button"
          onClick={() => {
            deleteTaskHandler(id);
          }}
        >
          <MdOutlineDeleteOutline className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SubTask;
