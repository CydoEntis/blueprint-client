import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const Toggle = ({ isOpen, onClick }: Props) => {
  console.log(isOpen);
  return (
    <div
      className="fixed top-5 right-5 z-40 rounded-md border border-accent-30 bg-white p-1.5 drop-shadow-lg hover:bg-accent-10 lg:hidden"
      onClick={onClick}
    >
      {isOpen ? (
        <XMarkIcon className="h-8 w-8 text-blue-10" />
      ) : (
        <Bars3BottomRightIcon className="h-8 w-8 text-blue-10" />
      )}
    </div>
  );
};

export default Toggle;
