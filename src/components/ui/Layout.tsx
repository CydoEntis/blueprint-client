import React from "react";
import Header from "../header/Header";
import ProjectNav from "../nav/ProjectNav";
import { StarIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";
import MobileNav from "../nav/MobileNav";
import Nav from "../nav/Nav";
import Projects from "../projects/Projects";

const Layout = () => {
  return (
    <main className="w-fulll flex flex-col">
      <Nav />
      <MobileNav />
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
