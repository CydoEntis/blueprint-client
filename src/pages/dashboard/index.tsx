import StatsBlock from "@/features/dashboard/StatsBlock";
import StatsContainer from "@/features/dashboard/StatsContainer";
import Title from "@/components/typography/Typography";
import { useAppSelector } from "@/store/store";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {};

const index = (props: Props) => {
  const pending = useAppSelector((state) => state.job.pending);
  const declined = useAppSelector((state) => state.job.declined);
  const interview = useAppSelector((state) => state.job.interview);
  const user = useAppSelector((state) => state.user.user);


  const [monthlyApps, setMonthlyApps] = useState();

  useEffect(() => {
    async function getMonthlyApps() {
      const res = await axios(`${import.meta.env.VITE_ENDPOINT}/jobs/apps`);
      setMonthlyApps(res.data.monthlyApplications);
    }

    getMonthlyApps();
  }, []);

  return (
    <div className=" w-full p-5">
      <Title
        className="p-5 text-[2rem]"
        text={`Good afternoon, ${user.username}`}
      />
      <StatsContainer className="flex w-full flex-wrap items-center justify-center gap-5 p-5 md:flex-nowrap ">
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
      <div className="hidden w-full md:block mt-24">
        <h3 className="p-5 text-2xl text-grey-40 dark:text-off-white">Job Applications Breakdown</h3>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={monthlyApps} margin={{ top: 25 }}>
            <CartesianGrid strokeDasharray="3 3 " />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#00B0D6" barSize={75} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default index;
