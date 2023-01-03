import React from "react";
import TaskCard from "@/components/cards/TaskCard";

import Freddy from "@/assets/freddy.jpg";
import James from "@/assets/james.jpg";
import Rachelle from "@/assets/rachelle.jpg";
import Sidebar from "@/components/sidebar/Sidebar";
import StatsContainer from "@/components/stats/StatsContainer";
import StatsBlock from "@/components/stats/StatsBlock";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section className="flex py-5">
      <main className="flex h-4/5 flex-wrap items-center gap-3 p-3 md:w-10/12">
        <TaskCard type="backend" />
        <TaskCard type="testing" />
        <TaskCard type="frontend" />
        <TaskCard type="uiux" />
        <TaskCard type="security" />
        <TaskCard type="bug" />
        <TaskCard type="backend" />
        <TaskCard type="uiux" />
        <TaskCard type="bug" />
      </main>
      <Sidebar className="mx-auto flex h-4/5  flex-col flex-wrap items-center justify-center gap-3 p-3 md:w-2/12">
        <StatsContainer title="Stats">
          <StatsBlock count={550} text="Total Tasks" />
          <StatsBlock isFocused count={390} text="Upcoming" />
          <StatsBlock count={250} text="In Progress" />
          <StatsBlock count={125} text="Completed" />
        </StatsContainer>

        <div className="w-full">
          <h1 className="text-2xl font-bold">Recent Activities</h1>
          <p>Dec 31, 2022</p>
          {/* Acitvity */}
          <div className="my-3 flex items-center border-2 p-3">
            <div className="h-10 w-10 rounded-full">
              <img className="rounded-full" src={Freddy} alt="" />
            </div>
            <div className="mx-5 h-10">
              <h3>Add Mobile Navigation</h3>
              <p className="font-italic text-sm text-grey-550">
                Freddy Bojangles
              </p>
              <p className="text-xs text-grey-550">35 minutes ago</p>
            </div>
          </div>

          <div className="my-3 flex items-center border-2 p-3">
            <div className="h-10 w-10 rounded-full">
              <img className="rounded-full" src={Freddy} alt="" />
            </div>
            <div className="mx-5 h-10">
              <h3>Add Mobile Navigation</h3>
              <p className="font-italic text-sm text-slate-500">
                Freddy Bojangles
              </p>
              <p className="text-xs text-slate-500">35 minutes ago</p>
            </div>
          </div>

          <div className="my-3 flex items-center border-2 p-3">
            <div className="h-10 w-10 rounded-full">
              <img className="rounded-full" src={Freddy} alt="" />
            </div>
            <div className="mx-5 h-10">
              <h3>Add Mobile Navigation</h3>
              <p className="font-italic text-sm text-slate-500">
                Freddy Bojangles
              </p>
              <p className="text-xs text-slate-500">35 minutes ago</p>
            </div>
          </div>
        </div>
      </Sidebar>
    </section>
  );
};

export default Dashboard;
