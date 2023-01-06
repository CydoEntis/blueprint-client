import React from "react";
import Rachelle from "@/assets/rachelle.jpg";
import Freddy from "@/assets/freddy.jpg";
import James from "@/assets/james.jpg";
import Tasks from "@/components/task/Tasks";
import TaskActions from "@/components/task/TaskActions";
import StatsContainer from "@/components/stats/StatsContainer";
import StatsBlock from "@/components/stats/StatsBlock";
import Sidebar from "@/components/sidebar/Sidebar";
import RecentActivitesFeed from "@/components/recent/RecentActivitesFeed";
import RecentActivity from "@/components/recent/RecentActivity";
import ProjectCard from "@/components/projects/ProjectCard";

type Props = {};

const users = [
  {
    name: "Freddy",
    username: "fredster",
    profilePicture: Freddy,
    role: "user",
  },
  {
    name: "James",
    username: "jamester",
    profilePicture: James,
    role: "user",
  },
  {
    name: "Rachelle",
    username: "rach",
    profilePicture: Rachelle,
    role: "user",
  },
];

const Dashboard = (props: Props) => {
  return (
    <main className="flex flex-col lg:flex-row">
      <section className="flex flex-col px-8 py-5">
        <ProjectCard
          color="blue"
          title="Blueprint API"
          team="Backend Developers"
          dueDate="1 week"
          users={users}
        />
        {/* <TaskActions /> */}
        <Tasks />
      </section>
      <Sidebar className="mx-auto flex h-screen w-full flex-col flex-wrap  bg-white px-8">
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
      </Sidebar>
    </main>
  );
};

export default Dashboard;
