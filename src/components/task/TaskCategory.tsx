import React from "react";

type Props = {
  iconColor: string;
  title: string;
  count: number;
  children: React.ReactNode;
};

const TaskCategory = ({ title, children, iconColor, count }: Props) => {
  return (
    <div className="mr-10 flex h-full w-72 flex-col gap-3">
      <div className="flex items-center">
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
