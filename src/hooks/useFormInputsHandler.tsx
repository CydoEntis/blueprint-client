import { IJob } from "@/store/features/jobSlice";
import { useState } from "react";

const initialJobState: IJob = {
  _id: "",
  position: "",
  company: "",
  location: "",
  jobType: "full-time",
  jobStatus: "pending",
  interviewDate: "",
  createdAt: "",
  description: "",
};


export function useFormInputsHandler() {
    const [job, setJob] = useState<IJob>(initialJobState);

    function onChangeHandler(
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
          | React.ChangeEvent<HTMLSelectElement>
      ) {
        setJob({
          ...job,
          createdAt: Date.now().toString(),
          [e.target.name]: e.target.value.replace(/\s+/g, " "),
        });
      }

      function clearFields() {
        setJob(initialJobState);
      }

      return {
        setJob,
        job,
        onChangeHandler,
        clearFields
      }
    
}
