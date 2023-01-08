// import Header from "@/components/header/Header";
import TaskNav from "@/components/nav/TaskNav";
import Tasks from "@/components/task/Tasks";
import React, { useState } from "react";

import data from "@/data/fake-data.json";
import ProjectList from "@/components/projects/ProjectList";
import { ProjectProps } from "@/types/project-types";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import tasks from "@/data/task-data.json";
import AddTask from "@/components/task/AddTask";

type Props = {};

const Project = (props: Props) => {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState<boolean>(false);
  return (
    <div className="relative">
      <Header
        title="Project 1"
        description="this is project numbeer one"
        onClick={() => setIsAddTaskOpen(true)}
        buttonText="Add Task"
      />
      {isAddTaskOpen && <AddTask onClick={() => setIsAddTaskOpen(false)} />}
      <TaskNav id={1} count={10} onClick={() => console.log("first")} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default Project;
