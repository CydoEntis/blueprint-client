import React from "react";
import Card from "../cards/Card";
import Freddy from "@/assets/freddy.jpg";
import James from "@/assets/james.jpg";
import Rachelle from "@/assets/rachelle.jpg";
import { User } from "@/types/user-types";
import Users from "../shared/user/Users";
import { RiTeamLine } from "react-icons/ri";
import { GiAlarmClock } from "react-icons/gi";
import { ProjectProps } from "@/types/project-types";

const ProjectCard = ({
  id,
  color,
  title,
  team,
  dueDate,
  users,
}: ProjectProps) => {
  return (
    <Card key={id}>
      <div className={`bg-${color}-50 h-8 w-full rounded-t-2xl`} />
      <div className="p-3">
        <div className="flex w-full flex-col justify-between">
          <h1 className="py-1 text-lg font-bold  text-gray-70">{title}</h1>
          <div className="flex items-center py-1 text-gray-60">
            <RiTeamLine className="mr-2 h-5 w-5" />
            <p className="text-sm ">{team}</p>
          </div>
          <div className="flex items-center py-1 text-gray-60">
            <GiAlarmClock className="mr-2 h-5 w-5" />
            <p className="text-sm text-gray-60">{dueDate}</p>
          </div>
        </div>
        <div className="flex w-full items-center  border-t border-grey-50 py-3">
          <div className="w-3/4">
            <h3 className="py-1 text-xs font-bold text-gray-70">
              Team Members
            </h3>
            <Users users={users} />
          </div>
          <div className="w-1/4">
            <h3 className="py-1 text-xs font-bold text-gray-70">Progress</h3>
            <p>34%</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
