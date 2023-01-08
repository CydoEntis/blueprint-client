import React from "react";
import { IoMdClose } from "react-icons/io";

type Props = {
  onClick: () => void;
};

const AddTask = ({ onClick }: Props) => {
  return (
    <div className="absolute left-1/2  z-40 w-1/2 -translate-x-1/2   transform rounded-2xl bg-white p-5 drop-shadow-lg">
      <IoMdClose
        className="text-grey-30: absolute top-3 right-3 h-8 w-8 cursor-pointer hover:text-red-400"
        onClick={onClick}
      />
      <h1 className="text-center">Create Task</h1>
      <div className="flex flex-col">
        <input
          className="mb-3 rounded-lg bg-off-white p-3"
          type="text"
          placeholder="Task Title"
        />
        <textarea
          className="mb-3 rounded-lg bg-off-white p-3"
          cols={30}
          rows={10}
        >
          Description
        </textarea>
        <input
          className="mb-3 rounded-lg bg-off-white p-3"
          type="text"
          placeholder="Task Title"
        />
      </div>
    </div>
  );
};

export default AddTask;
