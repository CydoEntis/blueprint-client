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
      <div className="flex items-center py-1">
        <div className={`mr-1 h-2 w-2 rounded-full bg-${iconColor}-450`}></div>
        <h4
          className="cursor-pointer hover:text-slate-600"
          onClick={onClickHandler}
        >
          {title}
        </h4>
      </div>
      {isOpen && children}
    </ul>
  );
};

export default Project;
