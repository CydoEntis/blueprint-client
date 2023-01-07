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
    <main className="relative flex h-screen w-screen flex-col bg-white">
      <Nav />
      <MobileNav isOpen={isOpen} />
      <Toggle isOpen={isOpen} onClick={() => setIsOpen((isOpen) => !isOpen)} />
      <Header
        title="Project 1"
        iconColor="red"
        icon={<StarIcon className="h-6 w-6 text-gray-60" />}
      />
      {/* <Projects /> */}
      <div className="rounded-tl-[5rem] bg-gray-50 lg:ml-80 lg:h-screen lg:overflow-hidden">
        {/* <div className="w-full bg-white">

          <ProjectNav />
        </div> */}
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
