import Header from "@/components/header/Header";
import TaskNav from "@/features/navigation/TaskNav";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Tasks = (props: Props) => {
  return (
    <div className="lg:px-4 xl:px-12">
      <Header
        title="Project 1"
        description="this is project numbeer one"
        onClick={() => console.log("Add A task")}
        buttonText="Add Task"
      />
      <TaskNav id={1} count={10} onClick={() => console.log("first")} />
      <Tasks />
    </div>
  );
};

export default Tasks;
