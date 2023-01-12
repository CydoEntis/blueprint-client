import React, { useState } from "react";
import Header from "../components/header/MainHeader";
import ProjectNav from "../components/nav/ProjectNav";
import { Bars3BottomRightIcon, StarIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";
import MobileNav from "../components/nav/MobileNav";
import Nav from "../components/nav/Nav";
import Toggle from "../components/nav/Toggle";
import MainHeader from "@/components/header/MainHeader";

const Root = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className="relative flex h-screen w-screen flex-col bg-white">
      <Nav />
      <MobileNav isOpen={isOpen} />
      <Toggle isOpen={isOpen} onClick={() => setIsOpen((isOpen) => !isOpen)} />
      <MainHeader
        title="Project 1"
        iconColor="red"
        icon={<StarIcon className="text-gray-60 h-6 w-6" />}
      />
      {/* <Projects /> */}
      <div className="rounded-tl-[3rem] bg-off-white lg:ml-80 lg:h-screen lg:overflow-hidden">
        {/* <div className="w-full bg-white">

          <ProjectNav />
        </div> */}
        <Outlet />
      </div>
    </main>
  );
};

export default Root;