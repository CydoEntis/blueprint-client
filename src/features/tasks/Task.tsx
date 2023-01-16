import Button from "@/components/buttons/Button";
import Tag from "@/components/tags/Tag";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import SubTasks from "./SubTasks";

let taskList = [
  {
    id: "1",
    description: "Some kind of task",
    completed: false,
  },
  {
    id: "2",
    description: "A completed task",
    completed: true,
  },
  {
    id: "3",
    description: "Get this shit done",
    completed: false,
  },
];

type Props = {};

const Task = (props: Props) => {
  const [tasks, setTasks] = useState(taskList);

  const [subtask, setSubtask] = useState<string>("");

  const deleteTaskHandler = (id: string) => {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    console.log(tasks);
  };

  const completeTaskHandler = (id: string) => {
    let index = tasks.findIndex((task) => task.id === id);
    let updatedTasks = [...tasks];
    let updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  return (
    <div className="mx-auto w-3/4 rounded-lg bg-white p-5">
      <div>
        {/* <Link
          className="ml-2 flex w-16 items-center justify-center rounded-lg border border-accent-30 bg-accent-10 py-2 px-3 text-xs text-accent-40"
          to={`/projects/${1}/tasks?sort=all`}
        >
          <BiArrowBack className="text-[2.5rem]" />
        </Link> */}

        <h1 className="mb-5 text-2xl font-bold text-grey-40">
          Mobile App Design
        </h1>
        <div className="flex w-64 justify-between">
          <h3 className="text-grey-30">Assignee</h3>
          <div>
            <h3>Jack Hughman</h3>
          </div>
        </div>
        <div className="flex w-64 justify-between">
          <h3>Due Date</h3>
          <h3>2-16-2023</h3>
        </div>
        <div className="flex w-64 justify-between">
          <h3>Tags</h3>
          <div className="flex">
            <Tag text={"ui/ux"} />
            <Tag text={"mobile"} />
          </div>
        </div>
        <div className="w-[500px]">
          <SubTasks
            tasks={taskList}
            deleteTaskHandler={deleteTaskHandler}
            completeTaskHandler={completeTaskHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
