import Loading from "@/components/Spinners/Loading";
import { getJobs, IJob } from "@/store/features/jobSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect } from "react";
import Job from "./Job";

type Props = {};

const Jobs = (props: Props) => {
  const jobs = useAppSelector((state) => state.job.jobs);

  return (
    <div className="flex flex-col justify-between gap-y-5 md:flex-row md:flex-wrap">
      {jobs.length === 0 && <p className="text-center text-2xl text-grey-20">No jobs found!</p>}
      {jobs.length !== 0 && jobs.map((job: IJob) => {
        let appliedDate = "";
        if (job.createdAt || job.createdAt !== undefined) {
          appliedDate = new Date(job.createdAt).toDateString();
        }
        let interviewDate = "";
        if (job.interviewDate) {
          interviewDate = new Date(job.interviewDate).toDateString();
        } else {
          interviewDate = "";
        }
        return (
          <Job
            key={job._id}
            id={job._id}
            position={job.position}
            company={job.company}
            location={job.location}
            interviewDate={interviewDate}
            type={job.jobType}
            status={job.jobStatus}
            createdAt={appliedDate}
          />
        );
      })}
    </div>
  );
};

export default Jobs;
