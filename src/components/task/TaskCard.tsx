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
import TaskIcon from "@/components/task/TaskIcon";
import Card from "../shared/cards/Card";
import { Task } from "@/types/task-type";
import Users from "../shared/user/Users";

// Change type to use enums
type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <Card to={`/tasks/${task.id}`} key={task.id}>
      <div className=" p-3">
        {/* Tags */}
        <div className="flex items-center">
          <Tag text={task.tag} />
        </div>
        <div className="w-full py-3">
          <h3 className="text-gray-70 font-bold">{task.title}</h3>
          <p className="text-gray-60 text-sm">{task.description}</p>
        </div>
        {/* Subtasks */}
      </div>
      <div className="border-grey-50 flex w-full items-center justify-between border-t  p-3">
        <Users users={task.users} />
        <div className="flex items-center justify-center">
          <TaskIcon
            count={3}
            icon={<PhotoIcon className="text-gray-60 mr-2 h-6 w-6" />}
          />
          <TaskIcon
            count={5}
            icon={<ChatBubbleOvalLeftEllipsisIcon className="mr-2 h-6 w-6 " />}
          />
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
