// import Header from "@/components/header/Header";
import React, { useState } from "react";

import Header from "@/components/header/Header";
import tasks from "@/data/task-data.json";
import AddTask from "@/features/tasks/AddTask";
import TaskFilter from "@/features/tasks/TaskFilter";
import Tasks from "@/features/tasks/Tasks";

type Props = {};

const Project = (props: Props) => {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState<boolean>(false);
  return (
    <div className="relative lg:px-4 xl:px-12">
      <Header
        title="Project 1"
        description="this is project numbeer one"
        onClick={() => setIsAddTaskOpen(true)}
        buttonText="Add Task"
      />
      {isAddTaskOpen && <AddTask onClose={() => setIsAddTaskOpen(false)} />}
      <TaskFilter id={1} count={10} onClick={() => console.log("first")} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default Project;
