import TaskCard from "@/components/cards/TaskCard";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section className="flex py-5">
      <main className="flex h-4/5 flex-wrap items-center gap-3 p-3 md:w-10/12">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </main>
      <article className="mx-auto flex h-4/5 flex-wrap items-center justify-center gap-3 p-3 md:w-2/12">
        <div>Something goes here</div>
        <div>
          <h1>Recent Activities</h1>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div></div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Dashboard;
