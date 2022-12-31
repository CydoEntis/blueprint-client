import TaskCard from "@/components/cards/TaskCard";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section className="flex flex-wrap items-center  gap-5 py-5">
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
