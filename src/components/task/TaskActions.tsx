import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import ActionButton from "../buttons/ActionButton";

type Props = {};

const TaskActions = (props: Props) => {
  return (
    <div className="mb-5 flex w-full justify-end border-b-2 border-gray-55 py-3 px-5">
      <ActionButton
        className="flex w-32 items-center justify-center rounded-md bg-indigo-500 py-2 text-white drop-shadow-lg"
        onClick={() => console.log("Clicked")}
      >
        <PlusIcon className="mr-1 h-5 w-5" />
        New Task
      </ActionButton>
    </div>
  );
};

export default TaskActions;
