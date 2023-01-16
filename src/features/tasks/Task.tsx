import Avatar from "@/components/avatars/Avatar";
import Button from "@/components/buttons/Button";
import TextArea from "@/components/form/TextArea";
import Tag from "@/components/tags/Tag";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import SubTasks from "./SubTasks";
import { AiTwotoneCalendar } from "react-icons/ai";

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
      <div className=" mx-auto h-52 w-5/6 overflow-y-auto rounded-2xl bg-white p-3 ">
        <SubTasks
          tasks={taskList}
          deleteTaskHandler={deleteTaskHandler}
          completeTaskHandler={completeTaskHandler}
        />
      </div>
      <div className="mx-auto flex w-5/6 flex-col  rounded-2xl bg-white p-3">
        <div className="flex flex-col">
          <TextArea id="new-comment" numCols={50} numRows={5} />
          <Button
            type="submit"
            className="flex w-40 items-center justify-center rounded-xl border border-accent-30 bg-accent-10 py-2  px-5   text-accent-40 transition-all  duration-300 ease-in-out"
          >
            Add Comment
          </Button>
        </div>
        <div className="py-3">
          <div className=" flex-col border-b border-off-white py-3">
            <div className="flex items-center">
              <Avatar
                className="mr-2 h-10 w-10"
                src="https://www.fakepersongenerator.com/Face/female/female20171026234465515.jpg"
              />
              <h3 className="mr-2 text-grey-40 ">Kathleen Q Mincey</h3>
              <p className="text-xs text-grey-20">41m ago</p>
            </div>
            <p className="p-2 text-sm text-grey-40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              reiciendis, harum facere aut temporibus nesciunt explicabo iure
              praesentium beatae placeat? Veniam, dolor labore amet neque omnis
              nesciunt numquam maxime eligendi.
            </p>
          </div>
        </div>
        <div className="py-3">
          <div className=" flex-col border-b border-off-white py-3">
            <div className="flex items-center">
              <Avatar
                className="mr-2 h-10 w-10"
                src="https://www.fakepersongenerator.com/Face/female/female20171026234465515.jpg"
              />
              <h3 className="mr-2 text-grey-40 ">Kathleen Q Mincey</h3>
              <p className="text-xs text-grey-20">41m ago</p>
            </div>
            <p className="p-2 text-sm text-grey-40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              reiciendis, harum facere aut temporibus nesciunt explicabo iure
              praesentium beatae placeat? Veniam, dolor labore amet neque omnis
              nesciunt numquam maxime eligendi.
            </p>
          </div>
        </div>
        <div className="py-3">
          <div className=" flex-col border-b border-off-white py-3">
            <div className="flex items-center">
              <Avatar
                className="mr-2 h-10 w-10"
                src="https://www.fakepersongenerator.com/Face/female/female20171026234465515.jpg"
              />
              <h3 className="mr-2 text-grey-40 ">Kathleen Q Mincey</h3>
              <p className="text-xs text-grey-20">41m ago</p>
            </div>
            <p className="p-2 text-sm text-grey-40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              reiciendis, harum facere aut temporibus nesciunt explicabo iure
              praesentium beatae placeat? Veniam, dolor labore amet neque omnis
              nesciunt numquam maxime eligendi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
