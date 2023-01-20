import StatsBlock from "@/features/dashboard/StatsBlock";
import StatsContainer from "@/features/dashboard/StatsContainer";
import TaskList from "@/features/tasks/TaskList";
import ProjectList from "@/features/projects/ProjectList";
import tasks from "@/data/recent-tasks-data.json";
import projects from "@/data/recent-projects-data.json";
import RecentItems from "@/features/dashboard/RecentItems";
import Title from "@/components/typography/Typography";

type Props = {};

const index = (props: Props) => {
  return (
    <div className=" w-full p-5">
      <Title className="p-5 text-[2rem]" text="Good afternoon, John Doe" />
      <StatsContainer className="flex w-full flex-wrap gap-5 p-5">
        <StatsBlock
          className=" border-accent-30 bg-accent-10  text-accent-40"
          count={150}
          text="Total"
        />
        <StatsBlock
          className=" border-yellow-30 bg-yellow-10  text-yellow-40"
          count={30}
          text="In Progress"
        />
        <StatsBlock
          className=" border-green-30 bg-green-10  text-green-40"
          count={376}
          text="Completed"
        />
        <StatsBlock
          className=" border-red-30 bg-red-10  text-red-40"
          count={12}
          text="Past Due"
        />
      </StatsContainer>
      <RecentItems>
        <Title className="ml-5 text-2xl" text="Recent Projects" />
        <ProjectList projects={projects} />
      </RecentItems>
      <RecentItems>
        <Title className="ml-5 text-2xl" text="Recent Tasks" />
        <TaskList tasks={tasks} />
      </RecentItems>
    </div>
  );
};

export default index;
