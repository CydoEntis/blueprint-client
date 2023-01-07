import Header from "@/components/header/Header";
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
      <Tasks />
    </div>
  );
};

export default Project;
