import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Category from "@/components/projects/Category";
import Project from "./Project";

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
          <Project iconColor="red" title="Project 1" />
          <Project iconColor="yellow" title="Project 2" />
          <Project iconColor="green" title="Project 3" />
        </Category>

        {/* All Projects */}
        <Category title="all projects">
          <Project iconColor="red" title="Project 1" />
          <Project iconColor="yellow" title="Project 2" />
          <Project iconColor="green" title="Project 3" />
        </Category>

        {/* Archived */}
        <Category title="archived">
          <Project iconColor="red" title="Project 1" />
          <Project iconColor="yellow" title="Project 2" />
          <Project iconColor="green" title="Project 3" />
        </Category>
      </nav>
    </Sidebar>
  );
};

export default Projects;
