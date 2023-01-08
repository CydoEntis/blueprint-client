// import Header from "@/components/header/Header";
import TaskNav from "@/components/nav/TaskNav";
import Tasks from "@/components/task/Tasks";
import React from "react";

import data from "@/data/fake-data.json";
import ProjectList from "@/components/projects/ProjectList";
import { ProjectProps } from "@/types/project-types";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import tasks from "@/data/task-data.json";

type Props = {};

const Project = (props: Props) => {
  return (
    <div>
      {/* <Header
        title="Projects"
        description="Overview of all projects"
        onClick={() => console.log("Button Clicked")}
        buttonText="Create Project"
      />
      <ProjectList projects={data} /> */}
      <Header
        title="Project 1"
        description="this is project numbeer one"
        onClick={() => console.log("Add A task")}
        buttonText="Add Task"
      />
      <TaskNav id={1} count={10} onClick={() => console.log("first")} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default Project;
