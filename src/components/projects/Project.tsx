import React from "react";

type Props = {
  iconColor: string;
  title: string;
};

const Project = ({ iconColor, title }: Props) => {
  return (
    <li className="ml-2 flex items-center py-1 text-xs text-grey-550">
      <div className={`mr-1 h-2 w-2 rounded-full bg-${iconColor}-450`}></div>
      {title}
    </li>
  );
};

export default Project;
