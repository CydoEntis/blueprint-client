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
      className="border-3 borer-cyan-400 absolute top-5 right-5 z-40 h-8 w-8"
      onClick={onClick}
    >
      {isOpen ? (
        <XMarkIcon className="text-gray-60 hover:text-red-400" />
      ) : (
        <Bars3BottomRightIcon className=" text-gray-60" />
      )}
    </div>
  );
};

export default Toggle;
