import React, { useState } from "react";
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
import { addJob, addNewJob, IJob } from "@/store/features/jobSlice";
import { useAppDispatch } from "@/store/store";
import { useNavigate } from "react-router-dom";

type Props = {};

const AddJob = (props: Props) => {
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isError, setIsError] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) {
    setJob({ ...job, [e.target.name]: e.target.value });
  }

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    if(!job.position || !job.company || !job.location || !job.jobType || !job.description) {
      setErrMsg("Please provide all fields.")
      setIsError(true);
    } else {
      setIsError(false);
      setErrMsg("");
    }

    await dispatch(addNewJob(job))
    dispatch(addJob(job));
    console.log(job);
    navigate("/jobs");
  }

  return (
    <div className="w-full rounded-md bg-white p-5 text-grey-30 shadow-md ">
      <FormTitle text="Add a Job" />
      <Form className="w-full flex-wrap items-center gap-3" onSubmit={onSubmitHandler}>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="position" />
          <Input name="position" type="text" onChange={onChangeHandler} />
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="company" />
          <Input type="text" name="company" onChange={onChangeHandler}/>
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="job location" />
          <Input type="text" name="location" onChange={onChangeHandler}/>
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="job type" />
          <Select options={typeOptions} name="jobType" onChange={onChangeHandler}/>
        </FormControl>
        <div className="flex w-full flex-col lg:w-[calc(50%-10px)]">
          <label className="pb-2 text-lg">Description</label>
          <textarea className="h-48 w-full resize-none rounded-md bg-off-white outline-blue-40" name="description" onChange={onChangeHandler}></textarea>
        </div>
        <FormButtonWrapper>
        <Button
          className="mr-2 border-blue-40 bg-blue-40 px-3 py-1 text-sm text-white shadow-md lg:text-base w-1/2 sm:w-[200px]"
          type="submit"
        >
          Add
        </Button>
        <Button
          className="mr-2 border-red-40 bg-red-40 px-3 py-1 text-sm text-white lg:text-base w-1/2 sm:w-[200px]"
          type="button"
        >
          Clear
        </Button>
        </FormButtonWrapper>
      </Form>
    </div>
  );
};

export default AddJob;
