import StatsBlock from "@/features/dashboard/StatsBlock";
import StatsContainer from "@/features/dashboard/StatsContainer";
import TaskList from "@/features/tasks/TaskList";
import tasks from "@/data/task-data.json";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div className=" w-full p-5">
      <StatsContainer>
        <StatsBlock
          className="flex h-40 w-40 flex-col items-center justify-center rounded-xl border border-accent-30 bg-accent-10 py-2 px-5  text-xl text-accent-40  transition-all  duration-300 ease-in-out  "
          count={150}
          text="Total"
        />
        <StatsBlock
          className="flex h-40 w-40 flex-col items-center justify-center rounded-xl border border-yellow-30 bg-yellow-10 py-2 px-5  text-xl text-yellow-40  transition-all  duration-300 ease-in-out  "
          count={30}
          text="In Progress"
        />
        <StatsBlock
          className="flex h-40 w-40 flex-col items-center justify-center rounded-xl border border-green-30 bg-green-10 py-2 px-5  text-xl text-green-40  transition-all  duration-300 ease-in-out  "
          count={376}
          text="Completed"
        />
        <StatsBlock
          className="flex h-40 w-40 flex-col items-center justify-center rounded-xl border border-red-30 bg-red-10 py-2 px-5  text-xl text-red-40  transition-all  duration-300 ease-in-out  "
          count={12}
          text="Past Due"
        />
      </StatsContainer>
      <div>
        <h1>Most Recent Tasks</h1>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default index;
