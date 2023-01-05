import React, { useState } from "react";
import Header from "../header/Header";
import ProjectNav from "../nav/ProjectNav";
import { Bars3BottomRightIcon, StarIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";
import MobileNav from "../nav/MobileNav";
import Nav from "../nav/Nav";
import Projects from "../projects/Projects";

const Layout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onCloseHandler = () => setIsOpen(false);
  const onOpenHandler = () => setIsOpen(true);

  return (
    <main className="w-fulll relative flex flex-col">
      <Nav />
      {isOpen && <MobileNav onClose={onCloseHandler} />}
      <Bars3BottomRightIcon
        className="absolute top-5 right-5 h-8 w-8 text-gray-60"
        onClick={onOpenHandler}
      />
      {/* <Projects /> */}
      <div className=" bg-gray-50 md:ml-[335px]">
        <div className="w-full bg-white">
          {/* <Header
            title="Project 1"
            iconColor="red"
            icon={<StarIcon className="h-6 w-6 text-gray-60" />}
          /> */}
          <ProjectNav />
        </div>
        {/* <Outlet /> */}
      </div>
    </main>
  );
};

export default Layout;
