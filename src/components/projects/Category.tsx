import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { ChildrenProps } from "@/types/layout-types";

type ProjectProps = {
  title: string;
};

type Props = ChildrenProps & ProjectProps;

const Project = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  let icon = isOpen ? (
    <ChevronUpIcon className="mr-1 h-4 w-4" />
  ) : (
    <ChevronDownIcon className="mr-1 h-4 w-4" />
  );

  return (
    <ul className="text-grey-60 mt-8 flex w-full flex-col">
      <h4
        className="flex cursor-pointer items-center rounded-lg py-2 px-2 text-xs uppercase hover:bg-gray-40"
        onClick={onClickHandler}
      >
        {icon} {title}
      </h4>
      {isOpen && children}
    </ul>
  );
};

export default Project;
