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
          <MagnifyingGlassIcon className="mr-2 h-4 w-1/12 text-grey-550" />
          <input
            className="w-10/12 bg-transparent text-sm"
            type="text"
            placeholder="Search..."
          />
        </div>

        {/* Favorites */}
        <Category title="favorites">
          <Project iconColor="red" title="Project 1">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </Project>
          <Project iconColor="yellow" title="Project 2">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </Project>
          <Project iconColor="green" title="Project 3">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </Project>
        </Category>

        {/* All Projects */}
        <Category title="all projects">
          <Project iconColor="red" title="Project 1">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </Project>
          <Project iconColor="yellow" title="Project 2">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </Project>
          <Project iconColor="green" title="Project 3">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </Project>
        </Category>

        {/* Archived */}
        <Category title="archived">
          <Project iconColor="red" title="Project 1">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </Project>
          <Project iconColor="yellow" title="Project 2">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </Project>
          <Project iconColor="green" title="Project 3">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </Project>
        </Category>
      </nav>
    </Sidebar>
  );
};

export default Projects;
