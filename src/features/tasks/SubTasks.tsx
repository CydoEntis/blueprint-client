import List from "@/components/list/List";
import React, { useState } from "react";
import TaskLink from "./TaskLink";
import SubTask from "./SubTask";

type TaskProp = {
  id: string;
  description: string;
  completed: boolean;
};

type Props = {
  className?: string;
  tasks: TaskProp[];
  deleteTaskHandler: (id: string) => void;
  completeTaskHandler: (id: string) => void;
};

const SubTasks = ({
  className,
  tasks,
  deleteTaskHandler,
  completeTaskHandler,
}: Props) => {
  return (
    <div className={`${className}flex flex-col py-2`}>
      {tasks.map((task) => (
        <SubTask
          completed={task.completed}
          key={task.id}
          description={task.description}
          id={task.id}
          deleteTaskHandler={deleteTaskHandler}
          completeTaskHandler={completeTaskHandler}
        />
      ))}
    </div>
  );
};

export default SubTasks;
