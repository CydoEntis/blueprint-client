import React, { useEffect, useState } from "react";
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
import Error from "@/components/error/Error";
import { useFormInputsHandler } from "@/hooks/useFormInputsHandler";

type Props = {};

const AddJob = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isError, setIsError] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");

  const {job, clearFields, onChangeHandler} = useFormInputsHandler();
 

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    if(!job.position || !job.company || !job.location || !job.jobType || !job.description) {
      setErrMsg("Please provide all fields.")
      setIsError(true);
      return;
    } else {
      setIsError(false);
      setErrMsg("");
    }

    await dispatch(addNewJob(job))
    dispatch(addJob(job));
    navigate("/jobs");
  }


  
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrMsg("");
      setIsError(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };

  }, [isError]) 

  return (
    <div className="my-5 w-full rounded-md bg-white p-5 text-grey-30 shadow-md dark:bg-zinc-800 dark:text-off-white">
      <FormTitle text="Add a Job" />
      {isError && <Error message={errMsg}/>}
      <Form className="w-full flex-wrap items-center gap-3" onSubmit={onSubmitHandler}>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="position" />
          <Input name="position" type="text" value={job.position} onChange={onChangeHandler} />
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="company" />
          <Input type="text" name="company" value={job.company} onChange={onChangeHandler}/>
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="job location" />
          <Input type="text" name="location" value={job.location} onChange={onChangeHandler}/>
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="job type" />
          <Select options={typeOptions} name="jobType" value={job.jobType} onChange={onChangeHandler}/>
        </FormControl>
        <div className="flex w-full flex-col">
          <label className="pb-2 text-lg">Description</label>
          <textarea className="h-48 w-full resize-none rounded-md bg-off-white outline-blue-40 dark:bg-zinc-700" name="description" value={job.description}onChange={onChangeHandler}></textarea>
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
          onClick={clearFields}
        >
          Clear
        </Button>
        </FormButtonWrapper>
      </Form>
    </div>
  );
};

export default AddJob;
