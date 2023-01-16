import Avatar from "@/components/avatars/Avatar";
import Button from "@/components/buttons/Button";
import TextArea from "@/components/form/TextArea";
import Tag from "@/components/tags/Tag";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import SubTasks from "./SubTasks";
import { AiTwotoneCalendar } from "react-icons/ai";
import Comments from "../comments/Comments";
import AddComment from "../comments/AddComment";

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
  {
    id: "4",
    description: "Some kind of task",
    completed: false,
  },
  {
    id: "5",
    description: "A completed task",
    completed: true,
  },
  {
    id: "6",
    description: "Get this shit done",
    completed: false,
  },
  {
    id: "7",
    description: "Some kind of task",
    completed: false,
  },
  {
    id: "8",
    description: "A completed task",
    completed: true,
  },
  {
    id: "9",
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
    <div className="relative mx-auto flex w-3/4 flex-wrap gap-3 rounded-2xl bg-white">
      <div>
        <Link
          className="absolute top-5 right-5 flex w-10 items-center justify-center rounded-lg border border-red-30 bg-red-10 py-1 px-2 text-xs text-red-40"
          to={`/projects/${1}/tasks?sort=all`}
        >
          <MdClose className="text-2xl" />
        </Link>

        <div className="mx-auto w-5/6 rounded-2xl bg-white p-5">
          <h1 className="text-[2.15rem] font-bold text-grey-40">
            Mobile App Design
          </h1>
          <div className="flex">
            <Tag text={"ui/ux"} />
            <Tag text={"mobile"} />
          </div>
          <p className=" py-2 text-sm text-grey-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            consequuntur libero cumque dicta saepe. Tempore at distinctio non
            necessitatibus aliquid porro natus adipisci. Ullam consequatur
            aliquam pariatur. Voluptate, optio assumenda!
          </p>
          <div className="flex w-32 items-center rounded-full border border-green-30 bg-green-10 px-3 py-1 text-xs text-green-40">
            <AiTwotoneCalendar className="mr-1 text-lg" />
            <p>Feb 16, 2023</p>
          </div>
        </div>
      </div>
      <SubTasks
        className="mx-auto h-52 w-5/6 overflow-y-auto rounded-2xl bg-white p-3"
        tasks={taskList}
        deleteTaskHandler={deleteTaskHandler}
        completeTaskHandler={completeTaskHandler}
      />
      <AddComment />
      <Comments />
    </div>
  );
};

export default Task;
