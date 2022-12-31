import TaskCard from "@/components/cards/TaskCard";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section className="flex w-11/12 flex-wrap gap-8 p-5">
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </section>
  );
};

export default Dashboard;
