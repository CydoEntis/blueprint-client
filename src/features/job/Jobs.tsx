import { getJobs, IJob } from "@/store/features/jobSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect } from "react";
import Job from "./Job";

type Props = {};

const Jobs = (props: Props) => {
  const dispatch = useAppDispatch();
  const jobs = useAppSelector((state) => state.job.jobs);
  const isLoading = useAppSelector((state) => state.job.isLoading);
  useEffect(() => {
    dispatch(getJobs());
  }, []);

  console.log(typeof jobs);
  console.log(jobs);

  return (
    <div className="flex flex-col justify-between gap-y-5 md:flex-row md:flex-wrap">
      {isLoading && <p>Is Loading...</p>}
      {!isLoading &&
        jobs.map((job: IJob) => {
          let appliedDate = new Date(job.createdAt).toDateString();
          let interviewDate;
          if(job.interviewDate) {
             interviewDate = new Date(job.interviewDate).toDateString();
          } else {
            interviewDate = "";
          }

          console.log(interviewDate)
          console.log(appliedDate)
          return (
            <Job
              key={job._id}
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
