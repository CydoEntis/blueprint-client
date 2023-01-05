import React from "react";
import { Link } from "react-router-dom";
import ActionButton from "../buttons/ActionButton";
import FilterButton from "./FilterButton";

type Props = {};

const ProjectNav = (props: Props) => {
  return (
    <div className="z-30 hidden w-full gap-10 pl-5 md:flex">
      <ActionButton
        className="border-b-2 border-transparent pb-3 text-sm font-bold text-gray-60 hover:border-blue-50"
        onClick={() => console.log("Discussion Clicked")}
      >
        Tasks
      </ActionButton>
      <ActionButton
        className="border-b-2 border-transparent pb-3 text-sm font-bold text-gray-60 hover:border-blue-50"
        onClick={() => console.log("Discussion Clicked")}
      >
        Discussion
      </ActionButton>
      <ActionButton
        className="border-b-2 border-transparent pb-3 text-sm font-bold text-gray-60 hover:border-blue-50"
        onClick={() => console.log("Discussion Clicked")}
      >
        Timeline
      </ActionButton>
      <ActionButton
        className="border-b-2 border-transparent pb-3 text-sm font-bold text-gray-60 hover:border-blue-50"
        onClick={() => console.log("Discussion Clicked")}
      >
        Files
      </ActionButton>
      <ActionButton
        className="border-b-2 border-transparent pb-3 text-sm font-bold text-gray-60 hover:border-blue-50"
        onClick={() => console.log("Discussion Clicked")}
      >
        Overview
      </ActionButton>
    </div>
  );
};

export default ProjectNav;
