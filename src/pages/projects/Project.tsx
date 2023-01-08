import Header from "@/components/header/Header";
import TaskNav from "@/components/nav/TaskNav";
import Tasks from "@/components/task/Tasks";
import React from "react";

type Props = {};

const Project = (props: Props) => {
  return (
    <div>
      <Header
        title="Project 1"
        description="this is project numbeer one"
        onClick={() => console.log("Add A task")}
        buttonText="Add Task"
      />
      <TaskNav count={10} onClick={() => console.log("first")} />
      <Tasks />
    </div>
  );
};

export default Project;
