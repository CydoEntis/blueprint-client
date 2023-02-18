import React from "react";
import Job from "./Job";

type Props = {};

const Jobs = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-y-5">
      <Job
        role="Software Engineer"
        company="Netflix"
        location="New Jersey"
        interviewDate="Dec 28, 2022"
        type="Remote"
        status="Full-time"
      />
      <Job
        role="Software Engineer"
        company="Netflix"
        location="New Jersey"
        interviewDate="Dec 28, 2022"
        type="Remote"
        status="Full-time"
      />
            <Job
        role="Software Engineer"
        company="Netflix"
        location="New Jersey"
        interviewDate="Dec 28, 2022"
        type="Remote"
        status="Full-time"
      />
            <Job
        role="Software Engineer"
        company="Netflix"
        location="New Jersey"
        interviewDate="Dec 28, 2022"
        type="Remote"
        status="Full-time"
      />
            <Job
        role="Software Engineer"
        company="Netflix"
        location="New Jersey"
        interviewDate="Dec 28, 2022"
        type="Remote"
        status="Full-time"
      />
            <Job
        role="Software Engineer"
        company="Netflix"
        location="New Jersey"
        interviewDate="Dec 28, 2022"
        type="Remote"
        status="Full-time"
      />
    </div>
  );
};

export default Jobs;
