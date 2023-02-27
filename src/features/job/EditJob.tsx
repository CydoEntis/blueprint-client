import React, { useEffect, useState } from "react";
import FormButton from "@/components/form/button/FormButton";
import Form from "@/components/form/Form";
import FormControl from "@/components/form/FormControl";
import FormTitle from "@/components/form/FormTitle";
import Input from "@/components/form/input/Input";
import Label from "@/components/form/label/Label";
import Select from "@/components/form/select/Select";
import FormButtonWrapper from "@/components/form/wrapper/FormButtonWrapper";
import Button from "@/components/buttons/Button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useNavigate, useParams } from "react-router-dom";
import { IJob, updateJob } from "@/store/features/jobSlice";
import axios from "axios";
import Error from "@/components/error/Error";
import { useFormInputsHandler } from "@/hooks/useFormInputsHandler";

type Props = {};

const statusOptions = [
  {
    id: 1,
    value: "interview",
  },
  {
    id: 2,
    value: "declined",
  },
  {
    id: 3,
    value: "pending",
  },
];

const typeOptions = [
  {
    id: 1,
    value: "interview",
  },
  {
    id: 2,
    value: "declined",
  },
  {
    id: 3,
    value: "pending",
  },
]

const initialJobState: IJob = {
  _id: "",
  position: "",
  company: "",
  location: "",
  jobType: "full-time",
  jobStatus: "pending",
  interviewDate: "",
  createdAt: "",
  description: ""
}

const EditJob = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [isError, setIsError] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");

  const {setJob, job, clearFields, onChangeHandler} = useFormInputsHandler();


  useEffect(() => {
    async function getJob() {
      try {
        const res = await axios(`${import.meta.env.VITE_ENDPOINT}/jobs/get/${jobId}`);
        setJob(res.data.job);
      } catch (error: any) {
        console.log(error);
      }
    }

    getJob();

    const timer = setTimeout(() => {
      setErrMsg("");
      setIsError(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isError]);



  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      !job.position ||
      !job.company ||
      !job.location ||
      !job.jobType ||
      !job.description
    ) {
      setErrMsg("Please provide all fields.");
      setIsError(true);
      return;
    } else if (job.jobStatus === "interview" && !job.interviewDate) {
      setIsError(true);
      setErrMsg("Please select a valid interview date");
      return;
    } else {
      setIsError(false);
      setErrMsg("");
    }

    if(job.jobStatus !== 'interview') {
      setJob({...job, interviewDate: ""})
    }

    await dispatch(updateJob(job));
    navigate("/jobs");
  }


  return (
    <div className="my-5 w-full rounded-md bg-white p-5 text-grey-30 shadow-md dark:bg-zinc-800 dark:text-off-white">
      <FormTitle text="Edit Job" />
      {isError && (
        <Error message={errMsg}/>
      )}
      <Form className="w-full flex-wrap items-center gap-3" onSubmit={onSubmit}>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="position" />
          <Input
            type="text"
            value={job?.position}
            onChange={onChangeHandler}
            name="position"
          />
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="company" />
          <Input
            type="text"
            value={job?.company}
            onChange={onChangeHandler}
            name="company"
          />
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="job location" />
          <Input
            type="text"
            value={job?.location}
            onChange={onChangeHandler}
            name="location"
          />
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="job type" />
          <Select
            options={typeOptions}
            value={job?.jobType}
            onChange={onChangeHandler}
            name="jobType"
          />
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="job status" />
          <Select
            options={statusOptions}
            value={job?.jobStatus}
            onChange={onChangeHandler}
            name="jobStatus"
          />
        </FormControl>
        {job.jobStatus === "interview" && (
          <FormControl className="items-start justify-start lg:w-[calc(50%-10px)]">
            <Label text="interview date" />
            <Input
              type="date"
              value={job?.interviewDate === null ? "" : job?.interviewDate}
              onChange={onChangeHandler}
              name="interviewDate"
            />
          </FormControl>
        )}
        <div className="flex w-full flex-col">
          <label className="pb-2 text-lg">Description</label>
          <textarea
            className="h-48 w-full resize-none rounded-md bg-off-white p-3 outline-blue-40 dark:bg-zinc-700"
            value={job?.description}
            name="description"
            onChange={onChangeHandler}
          ></textarea>
        </div>

        <FormButtonWrapper>
          <Button
            className="mr-2 w-1/2 border-blue-40 bg-blue-40 px-3 py-1 text-sm text-white shadow-md sm:w-[200px] lg:text-base"
            type="submit"
          >
            Confirm
          </Button>
          <Button
            className="mr-2 w-1/2 border-red-40 bg-red-40 px-3 py-1 text-sm text-white sm:w-[200px] lg:text-base"
            type="button"
            onClick={clearFields}
          >
            Clear
          </Button>
        </FormButtonWrapper>
      </Form>
    </div>
  );
};

export default EditJob;
