import StatsBlock from "@/features/dashboard/StatsBlock";
import StatsContainer from "@/features/dashboard/StatsContainer";
import Title from "@/components/typography/Typography";
import { useAppSelector } from "@/store/store";

type Props = {};

const index = (props: Props) => {
  const pending = useAppSelector((state) => state.job.pending);
  const declined = useAppSelector((state) => state.job.declined);
  const interview = useAppSelector((state) => state.job.interview);
  const user = useAppSelector(state => state.user.user);
  return (
    <div className=" w-full p-5">
      <Title className="p-5 text-[2rem]" text={`Good afternoon, ${user.username}`} />
      <StatsContainer className="flex w-full flex-wrap md:flex-nowrap items-center justify-center gap-5 p-5 ">
        <StatsBlock

          className=" border-yellow-30 bg-yellow-10  text-yellow-40"
          count={pending}
          text="pending applications"
        />
        <StatsBlock
          className=" border-blue-30 bg-blue-10  text-blue-40"
          count={interview}
          text="interviews scheduled"
        />
        <StatsBlock
          className=" border-red-30 bg-red-10  text-red-40"
          count={declined}
          text="jobs declined"
        />
      </StatsContainer>
      {/* <RecentItems>
        <Title className="ml-5 text-2xl" text="Recent Projects" />
        <ProjectList projects={projects} />
      </RecentItems>
      <RecentItems>
        <Title className="ml-5 text-2xl" text="Recent Tasks" />
        <TaskList tasks={tasks} />
      </RecentItems> */}
    </div>
  );
};

export default index;
