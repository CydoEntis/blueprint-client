import React from "react";
import data from "@/data/task-data.json";
import TaskCard from "./TaskCard";
import List from "../shared/list/List";

type Props = {};

const TaskList = (props: Props) => {
  return (
    <List>
      {data.map((task) => (
        <TaskCard task={task} />
      ))}
    </List>
  );
};

export default TaskList;
