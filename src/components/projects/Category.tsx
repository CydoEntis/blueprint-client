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
    <ul className="mt-8 flex w-full flex-col text-grey-550">
      <h4
        className="flex cursor-pointer items-center py-2 text-xs  uppercase hover:text-gray-500"
        onClick={onClickHandler}
      >
        {icon} {title}
      </h4>
      {isOpen && children}
    </ul>
  );
};

export default Project;
