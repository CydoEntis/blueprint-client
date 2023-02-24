import React, { useEffect, useState } from "react";
import FormButton from "@/components/form/button/FormButton";
import Form from "@/components/form/Form";
import FormControl from "@/components/form/FormControl";
import FormTitle from "@/components/form/FormTitle";
import Input from "@/components/form/input/Input";
import Label from "@/components/form/label/Label";
import Select from "@/components/form/select/Select";
import FormButtonWrapper from "@/components/form/wrapper/FormButtonWrapper";
import { typeOptions } from "@/data/select-options";
import Button from "@/components/buttons/Button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useNavigate, useParams } from "react-router-dom";
import { IJob, updateJob } from "@/store/features/jobSlice";
import axios from "axios";

type Props = {};

const EditJob = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [job, setJob] = useState<IJob>(
    {
      _id: "",
      position: "",
      company: "",
      location: "",
      jobType: "",
      jobStatus: "",
      interviewDate: "",
      createdAt: "",
      description: ""
    }
  );
  const [isError, setIsError] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getJob() {
      try {
        const res = await axios("http://localhost:1337/jobs/get/" + jobId);
        setJob(res.data.job);
      } catch (error: any) {
        console.log(error);
      }
    }
    setIsLoading(false);

    getJob();


    const timer = setTimeout(() => {
      setErrMsg("");
      setIsError(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };

  }, [isError]);



  function onChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) {
    setJob({ ...job, [e.target.name]: e.target.value });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    console.log("submitted");
    if(!job.position || !job.company || !job.location || !job.jobType || !job.description) {
      setErrMsg("Please provide all fields.")
      setIsError(true);
    } else {
      setIsError(false);
      setErrMsg("");
    }

    await dispatch(updateJob(job));
    navigate("/jobs")

  }
  return (
    <div className="w-full rounded-md bg-white p-5 text-grey-30 shadow-md ">
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <FormTitle text="Edit Job" />
          <Form
            className="w-full flex-wrap items-center gap-3"
            onSubmit={onSubmit}
          >
            <FormControl className="lg:w-[calc(50%-10px)]">
              <Label text="position" />
              <Input type="text" value={job?.position} onChange={onChange} name="position"/>
            </FormControl>
            <FormControl className="lg:w-[calc(50%-10px)]">
              <Label text="company" />
              <Input type="text" value={job?.company} onChange={onChange} name="company"/>
            </FormControl>
            <FormControl className="lg:w-[calc(50%-10px)]">
              <Label text="job location" />
              <Input type="text" value={job?.location} onChange={onChange} name="location"/>
            </FormControl>
            <FormControl className="lg:w-[calc(50%-10px)]">
              <Label text="job type" />
              <Select options={typeOptions} value={job?.jobType} onChange={onChange} name="jobType"/>
            </FormControl>
            <div className="flex w-full flex-col lg:w-[calc(50%-10px)]">
              <label className="pb-2 text-lg">Description</label>
              <textarea className="h-48 w-full resize-none rounded-md bg-off-white outline-blue-40 p-3" value={job?.description} name="description" onChange={onChange}></textarea>
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
              >
                Clear
              </Button>
            </FormButtonWrapper>
          </Form>
        </>
      )}
    </div>
  );
};

export default EditJob;