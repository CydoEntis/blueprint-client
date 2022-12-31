import React from "react";
import {
  ChartBarIcon,
  ClipboardDocumentIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="fixed z-40 mt-24 flex h-full w-28 flex-col items-center gap-16">
      <ChartBarIcon className="h-8 w-8 cursor-pointer text-[#727177] hover:text-purple-500" />
      <ClipboardDocumentIcon className="h-8 w-8 cursor-pointer text-[#727177] hover:text-purple-500" />
      <MoonIcon className="h-8 w-8 cursor-pointer text-[#727177] hover:text-purple-500" />
    </div>
  );
};

export default Nav;
