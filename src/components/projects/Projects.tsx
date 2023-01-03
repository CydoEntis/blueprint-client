import React from "react";
import Sidebar from "../sidebar/Sidebar";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Category from "@/components/projects/Category";
import Project from "./Project";
import Task from "../task/Task";
import ActionButton from "../buttons/ActionButton";

type Props = {};

const Projects = (props: Props) => {
  return (
    <Sidebar className="fixed ml-28 flex h-screen w-[225px] flex-col justify-between border-r-2 border-gray-50 p-5">
      <nav className="w-full">
        {/* Search */}
        <div className="mb-5 flex w-full items-center">
          <MagnifyingGlassIcon className="text-grey-60 mr-2 h-4 w-1/12" />
          <input
            className="text-grey-60 w-10/12 border-indigo-500 bg-transparent text-sm focus:border-b-2 focus:outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>

        {/* Favorites */}
        <Category title="favorites">
          <Project iconColor="red" title="Project 1">
            <Task iconColor="red" title="Task 1" />
            <Task iconColor="yellow" title="Task 2" />
            <Task iconColor="green" title="Task 3" />
          </Project>
          <Project iconColor="yellow" title="Project 2">
            <Task iconColor="red" title="Task 1" />
            <Task iconColor="yellow" title="Task 2" />
            <Task iconColor="green" title="Task 3" />
          </Project>
          <Project iconColor="green" title="Project 3">
            <Task iconColor="red" title="Task 1" />
            <Task iconColor="yellow" title="Task 2" />
            <Task iconColor="green" title="Task 3" />
          </Project>
        </Category>

        {/* All Projects */}
        <Category title="all projects">
          <Project iconColor="red" title="Project 1">
            <Task iconColor="red" title="Task 1" />
            <Task iconColor="yellow" title="Task 2" />
            <Task iconColor="green" title="Task 3" />
          </Project>
          <Project iconColor="yellow" title="Project 2">
            <Task iconColor="red" title="Task 1" />
            <Task iconColor="yellow" title="Task 2" />
            <Task iconColor="green" title="Task 3" />
          </Project>
          <Project iconColor="green" title="Project 3">
            <Task iconColor="red" title="Task 1" />
            <Task iconColor="yellow" title="Task 2" />
            <Task iconColor="green" title="Task 3" />
          </Project>
        </Category>

        {/* Archived */}
        <Category title="archived">
          <Project iconColor="red" title="Project 1">
            <Task iconColor="red" title="Task 1" />
            <Task iconColor="yellow" title="Task 2" />
            <Task iconColor="green" title="Task 3" />
          </Project>
          <Project iconColor="yellow" title="Project 2">
            <Task iconColor="red" title="Task 1" />
            <Task iconColor="yellow" title="Task 2" />
            <Task iconColor="green" title="Task 3" />
          </Project>
          <Project iconColor="green" title="Project 3">
            <Task iconColor="red" title="Task 1" />
            <Task iconColor="yellow" title="Task 2" />
            <Task iconColor="green" title="Task 3" />
          </Project>
        </Category>
      </nav>

      <ActionButton
        className="flex w-full items-center justify-center rounded-md bg-indigo-500 py-2 text-white"
        onClick={() => console.log("Clicked")}
      >
        <PlusIcon className="mr-1 h-5 w-5" />
        New Project
      </ActionButton>
    </Sidebar>
  );
};

export default Projects;
