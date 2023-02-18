import React from "react";
import Job from "./Job";

type Props = {};

const Jobs = (props: Props) => {
  return (
    <div className="flex flex-col justify-between gap-y-5 md:flex-row md:flex-wrap">
      <Job
        role="Software Engineer"
        company="Netflix"
        location="New Jersey"
        interviewDate="Dec 28, 2022"
        type="internship"
        status="pending"
      />
      <Job
        role="Software Engineer"
        company="Netflix"
        location="New Jersey"
        interviewDate="Dec 28, 2022"
        type="part-time"
        status="accepted"
      />
      <Job
        role="Software Engineer"
        company="Netflix"
        location="New Jersey"
        interviewDate="Dec 28, 2022"
        type="full-time"
        status="declined"
      />
    </div>
  );
};

export default Jobs;
