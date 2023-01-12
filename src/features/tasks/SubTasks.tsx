import List from "@/components/list/List";
import React, { useState } from "react";
import TaskLink from "../navigation/TaskLink";
import SubTask from "./SubTask";

type Props = {};

const SubTasks = (props: Props) => {
  const [tasks, setTasks] = useState(taskList);

  const deleteTaskHandler = (id: string) => {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    console.log(tasks);
  };

  return (
    <div className="flex h-40 flex-col py-2">
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
