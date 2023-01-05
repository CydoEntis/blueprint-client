import React from "react";

type Props = {
  iconColor: string;
  title: string;
  count: number;
  children: React.ReactNode;
};
const TaskCategory = ({ title, children, iconColor, count }: Props) => {
  return (
    <div className="flex w-full flex-col gap-3  lg:mr-3 lg:h-full lg:w-72">
      <div className="flex flex-row items-center ">
        <div className={`mr-1 h-2 w-2 rounded-full bg-${iconColor}-450`}></div>
        <h1>
          {title} {count}
        </h1>
      </div>
      {children}
    </div>
  );
};

export default TaskCategory;
