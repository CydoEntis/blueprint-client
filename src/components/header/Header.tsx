import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

type Props = {};

const Header = (props: Props) => {
  return (
    <head className="flex items-center justify-between">
      <h1 className="text-lg">Projects</h1>
      <button>
        <PlusIcon />
        Create Task
      </button>
    </head>
  );
};

export default Header;
