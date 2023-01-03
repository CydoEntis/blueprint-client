import React from "react";
import TaskCard from "@/components/cards/TaskCard";

import Freddy from "@/assets/freddy.jpg";
import James from "@/assets/james.jpg";
import Rachelle from "@/assets/rachelle.jpg";
import Sidebar from "@/components/sidebar/Sidebar";
import StatsContainer from "@/components/stats/StatsContainer";
import StatsBlock from "@/components/stats/StatsBlock";
import RecentActivitesFeed from "@/components/recent/RecentActivitesFeed";
import RecentActivity from "@/components/recent/RecentActivity";

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
      {/* <Sidebar className="mx-auto flex h-4/5  flex-col flex-wrap items-center justify-center gap-3 p-3 md:w-2/12">
        <StatsContainer title="Stats">
          <StatsBlock count={550} text="Total Tasks" />
          <StatsBlock isFocused count={390} text="Upcoming" />
          <StatsBlock count={250} text="In Progress" />
          <StatsBlock count={125} text="Completed" />
        </StatsContainer>

        <RecentActivitesFeed title="Recent Activies" date="Jan 3, 2023">
          <RecentActivity
            imgSrc={Freddy}
            title="Add Mobile Navigation"
            username="Freddy Bojangles"
            date="2 hours ago"
          />
          <RecentActivity
            imgSrc={Freddy}
            title="Add Mobile Navigation"
            username="Freddy Bojangles"
            date="2 hours ago"
          />
          <RecentActivity
            imgSrc={Freddy}
            title="Add Mobile Navigation"
            username="Freddy Bojangles"
            date="2 hours ago"
          />
        </RecentActivitesFeed>
      </Sidebar> */}
    </section>
  );
};

export default Dashboard;
