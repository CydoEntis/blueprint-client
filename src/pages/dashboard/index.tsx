import React from "react";
import TaskCard from "@/components/cards/TaskCard";

import Freddy from "@/assets/freddy.jpg";
import James from "@/assets/james.jpg";
import Rachelle from "@/assets/rachelle.jpg";

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
      <article className="mx-auto flex h-4/5  flex-col flex-wrap items-center justify-center gap-3 p-3 md:w-2/12">
        <div className="w-full">
          <h1 className="text-2xl font-bold">Stats</h1>
          <div className="flex flex-wrap gap-2">
            <div className="flex h-32 w-5/12 flex-col items-center justify-center rounded-lg bg-white font-bold drop-shadow-md">
              <h1>550</h1>
              <p>Total Tasks</p>
            </div>
            <div className="flex h-32 w-5/12 flex-col items-center justify-center rounded-lg bg-indigo-500 font-bold text-white drop-shadow-md">
              <h1>250</h1>
              <p>Upcoming</p>
            </div>
            <div className="flex h-32 w-5/12 flex-col items-center justify-center rounded-lg bg-white font-bold drop-shadow-md">
              <h1>390</h1>
              <p>In Progress</p>
            </div>
            <div className="flex h-32 w-5/12 flex-col items-center justify-center rounded-lg bg-white font-bold drop-shadow-md">
              <h1>125</h1>
              <p>Completed</p>
            </div>
          </div>
        </div>

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
      </article>
    </section>
  );
};

export default Dashboard;
