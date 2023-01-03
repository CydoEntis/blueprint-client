import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Category from "@/components/projects/Category";

type Props = {};

const Projects = (props: Props) => {
  return (
    <Sidebar className="h-screen w-[225px] border-2 border-cyan-600 p-3">
      <nav className="w-full">
        {/* Search */}
        <div className="mb-5 flex w-full items-center">
          <MagnifyingGlassIcon className="mr-1 h-4 w-4" />
          <input type="text" placeholder="Search..." />
        </div>

        {/* Favorites */}
        <Category title="favorites">
          <li className="ml-2 flex items-center py-1 text-xs text-grey-550">
            <div className="mr-1 h-2 w-2 rounded-full bg-red-450"></div>
            Project 1
          </li>
          <li className="ml-2 flex items-center py-1 text-xs text-grey-550">
            <div className="mr-1 h-2 w-2 rounded-full bg-yellow-450"></div>
            Project 2
          </li>
          <li className="ml-2 flex items-center py-1 text-xs text-grey-550">
            <div className="mr-1 h-2 w-2 rounded-full bg-green-450"></div>
            Project 3
          </li>
        </Category>

        {/* All Projects */}
        <ul className="mt-8 flex w-full flex-col">
          <li className="flex items-center py-1 text-xs uppercase text-grey-550">
            <ChevronDownIcon className="mr-1 h-4 w-4" />
            All Projects
          </li>
          <li className="ml-2 flex items-center py-1 text-xs text-grey-550">
            <div className="mr-1 h-2 w-2 rounded-full bg-red-450"></div>
            Project 1
          </li>
          <li className="ml-2 flex items-center py-1 text-xs text-grey-550">
            <div className="mr-1 h-2 w-2 rounded-full bg-yellow-450"></div>
            Project 2
          </li>
          <li className="ml-2 flex items-center py-1 text-xs text-grey-550">
            <div className="mr-1 h-2 w-2 rounded-full bg-green-450"></div>
            Project 3
          </li>
        </ul>

        {/* Archived */}
        <ul className="mt-8 flex w-full flex-col">
          <li className="flex items-center py-1 text-xs uppercase text-grey-550">
            <ChevronDownIcon className="mr-1 h-4 w-4" />
            Archived
          </li>
          <li className="ml-2 flex items-center py-1 text-xs text-grey-550">
            <div className="mr-1 h-2 w-2 rounded-full bg-red-450"></div>
            Project 1
          </li>
          <li className="ml-2 flex items-center py-1 text-xs text-grey-550">
            <div className="mr-1 h-2 w-2 rounded-full bg-yellow-450"></div>
            Project 2
          </li>
          <li className="ml-2 flex items-center py-1 text-xs text-grey-550">
            <div className="mr-1 h-2 w-2 rounded-full bg-green-450"></div>
            Project 3
          </li>
        </ul>
      </nav>
    </Sidebar>
  );
};

export default Projects;
