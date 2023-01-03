import React from "react";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PhotoIcon,
  ClockIcon,
  PaintBrushIcon,
  LightBulbIcon,
  ServerIcon,
  FingerPrintIcon,
  ClipboardDocumentCheckIcon,
  BugAntIcon,
} from "@heroicons/react/24/outline";
import Freddy from "@/assets/freddy.jpg";
import James from "@/assets/james.jpg";
import Rachelle from "@/assets/rachelle.jpg";
import Tag from "../tags/Tag";
import TaskIcon from "@/pages/task/TaskIcon";

// Change type to use enums
type Props = {
  title: string;
  description: string;
};

const TaskCard = ({ title, description }: Props) => {
  return (
    <div className="rounded-lg bg-white  drop-shadow-xl">
      <div className="p-3">
        {/* Tags */}
        <div className="flex items-center">
          <Tag color="green" text="Front End" />
        </div>
        <div className="w-full py-3">
          <h3 className="font-bold text-gray-70">{title}</h3>
          <p className="text-sm text-gray-60">{description}</p>
        </div>
        {/* Subtasks */}
      </div>
      <div className="border-grey-50 flex w-full items-center justify-between border-t p-3">
        <div className="relative mx-auto ml-4 flex h-8 items-center justify-center">
          <div className="absolute ml-16 h-8 w-8 rounded-full border-2 border-white">
            <img className="rounded-full" src={Freddy} alt="" />
          </div>
          <div className="absolute ml-8 h-8 w-8 rounded-full border-2 border-white ">
            <img className="rounded-full" src={Rachelle} alt="" />
          </div>
          <div className="border-whit absolute h-8 w-8 rounded-full border-2">
            <img className="rounded-full" src={James} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <TaskIcon
            count={3}
            icon={<PhotoIcon className="mr-2 h-6 w-6 text-gray-60" />}
          />
          <TaskIcon
            count={5}
            icon={<ChatBubbleOvalLeftEllipsisIcon className="mr-2 h-6 w-6 " />}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
