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
    <Card to={`${id}`} key={id}>
      {/* Card Content Wrapper */}
      <div className="flex  flex-col justify-between bg-white px-7">
        {/* Card Top  */}
        <div className="flex w-full flex-col py-5">
          <h1 className="py-1 text-2xl font-bold  text-grey-40">{title}</h1>
          <div className="flex items-center py-1 text-grey-30">
            <RiTeamLine className="mr-2 h-5 w-5" />
            <p className="text-md">{team}</p>
          </div>
          <div className="flex items-center py-1 text-grey-30">
            <GiAlarmClock className="mr-2 h-5 w-5" />
            <p className="text-sm text-grey-30">{dueDate}</p>
          </div>
        </div>
        {/* Card bottom  */}
        <div className="flex w-full  items-center  border-t border-off-white py-5">
          <div className="w-3/4">
            <h3 className="py-1 text-xs font-bold text-grey-40">
              Team Members
            </h3>
            <Users users={users} />
          </div>
          <div className="w-1/4">
            <h3 className="py-1 text-xs font-bold text-grey-40">Progress</h3>
            <p>34%</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
