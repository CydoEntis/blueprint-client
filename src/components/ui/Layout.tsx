import React from "react";
import Header from "../header/Header";
import ProjectNav from "../nav/ProjectNav";
import { StarIcon } from "@heroicons/react/24/outline";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-fulll flex flex-col md:ml-[335px]">
      <Header
        title="Project 1"
        iconColor="red"
        icon={<StarIcon className="h-6 w-6 text-gray-60" />}
      />
      <ProjectNav />
      <div className="layout bg-gray-50">{children}</div>
    </div>
  );
};

export default Layout;
