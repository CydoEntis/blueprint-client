import React from "react";
import TaskCard from "./TaskCard";
import List from "../shared/list/List";
import { Task } from "@/types/task-type";

type Props = {
  tasks: Task[];
};

const TaskList = ({ tasks }: Props) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </List>
  );
};

export default TaskList;
