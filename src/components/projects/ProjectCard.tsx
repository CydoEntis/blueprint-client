import React from "react";
import Card from "../cards/Card";
import Freddy from "@/assets/freddy.jpg";
import James from "@/assets/james.jpg";
import Rachelle from "@/assets/rachelle.jpg";
import { User } from "@/types/user-types";
import Users from "../shared/user/Users";

type Props = {
  title: string;
  overview: string;
  users: User[];
};

const ProjectCard = ({ title, overview, users }: Props) => {
  return (
    <Card>
      <div className="w-full py-2 px-3">
        <h1 className="text-center text-xl font-bold text-gray-70">{title}</h1>
        <p className="text-sm text-gray-60">{overview}</p>
      </div>
      <div className="border-grey-50 w-full border-t py-2 px-3">
        <Users users={users} />
      </div>
    </Card>
  );
};

export default ProjectCard;
