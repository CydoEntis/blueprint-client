import React from "react";
import TaskCategory from "@/components/task/TaskCategory";
import TaskCard from "@/components/task/TaskCard";
import ActionButton from "../buttons/ActionButton";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

const Tasks = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:overflow-auto lg:pb-5">
      <TaskList />
    </section>
  );
};

export default Tasks;
