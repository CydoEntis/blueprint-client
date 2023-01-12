import List from "@/components/list/List";
import React, { useState } from "react";
import TaskLink from "../navigation/TaskLink";
import SubTask from "./SubTask";

type TaskProp = {
  id: string;
  description: string;
  completed: boolean;
};

type Props = {
  tasks: TaskProp[];
  deleteTaskHandler: (id: string) => void;
};

const SubTasks = ({ tasks, deleteTaskHandler }: Props) => {
  return (
    <div className="flex h-40 flex-col overflow-y-auto py-2">
      {tasks.map((task) => (
        <SubTask
          completed={task.completed}
          key={task.id}
          description={task.description}
          id={task.id}
          deleteTaskHandler={deleteTaskHandler}
        />
      ))}
    </div>
  );
};

export default SubTasks;
