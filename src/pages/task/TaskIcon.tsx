import React from "react";

type Props = {
  icon: React.ReactNode;
  count: number;
};

const TaskIcon = ({ icon, count }: Props) => {
  return (
    <div className="mr-3 flex items-center justify-center text-gray-60">
      {icon}
      <p className="text-sm">{count}</p>
    </div>
  );
};

export default TaskIcon;
