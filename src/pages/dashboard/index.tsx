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
