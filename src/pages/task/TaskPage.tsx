import React from "react";
import Task from "@/features/tasks/Task";

type Props = {};

const TaskPage = (props: Props) => {
  return (
    <section className="m-5">
      <Task />
    </section>
  );
};

export default TaskPage;
