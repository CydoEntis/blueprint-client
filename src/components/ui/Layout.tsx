import React, { useState } from "react";
import Header from "../header/Header";
import ProjectNav from "../nav/ProjectNav";
import { Bars3BottomRightIcon, StarIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";
import MobileNav from "../nav/MobileNav";
import Nav from "../nav/Nav";
import Projects from "../projects/Projects";
import Toggle from "../nav/Toggle";

const Layout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className="relative flex h-screen flex-col border-2 bg-white">
      <Nav />
      <MobileNav isOpen={isOpen} />
      <Toggle isOpen={isOpen} onClick={() => setIsOpen((isOpen) => !isOpen)} />

      <Projects />
      <div className="h-screen overflow-hidden bg-gray-50 md:ml-[335px]">
        <div className="w-full bg-white">
          <Header
            title="Project 1"
            iconColor="red"
            icon={<StarIcon className="h-6 w-6 text-gray-60" />}
          />
          <ProjectNav />
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
