import React from "react";
import TaskCategory from "@/components/task/TaskCategory";
import TaskCard from "@/components/task/TaskCard";
import ActionButton from "../buttons/ActionButton";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import { Task } from "@/types/task-type";

type Props = {
  tasks: Task[];
};

const Tasks = ({ tasks }: Props) => {
  return (
    <section className="flex flex-col lg:flex-row lg:overflow-auto lg:pb-5">
      <TaskList tasks={tasks} />
    </section>
  );
};

export default Tasks;
