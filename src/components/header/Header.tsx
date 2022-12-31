import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

type Props = {};

const Header = (props: Props) => {
  return (
    <head className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Projects</h1>
      <button className="flex items-center justify-center rounded-full bg-purple-400 px-5 py-2 text-white">
        <PlusIcon className="h-5 w-5" />
        Create Task
      </button>
    </head>
  );
};

export default Header;
