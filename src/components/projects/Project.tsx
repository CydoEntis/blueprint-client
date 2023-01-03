import { ChildrenProps } from "@/types/layout-types";
import React, { useState } from "react";

type ProjectProps = {
  iconColor: string;
  title: string;
};

type Props = ProjectProps & ChildrenProps;

const Project = ({ iconColor, title, children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <ul className="text-grey-60 ml-2 text-xs">
      <div className="flex cursor-pointer items-center rounded-lg py-1 px-2 hover:bg-gray-40">
        <div className={`mr-1 h-2 w-2 rounded-full bg-${iconColor}-450`}></div>
        <h4 className="" onClick={onClickHandler}>
          {title}
        </h4>
      </div>
      {isOpen && children}
    </ul>
  );
};

export default Project;
