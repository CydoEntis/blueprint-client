import React from "react";
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

type Props = {};

const AddJob = (props: Props) => {
  return (
    <div className="w-full rounded-md bg-white p-5 text-grey-30 shadow-md ">
      <FormTitle text="Add a Job" />
      <Form className="w-full flex-wrap items-center gap-3" onSubmit={() => {}}>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="position" />
          <Input type="text" />
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="company" />
          <Input type="text" />
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="job location" />
          <Input type="text" />
        </FormControl>
        <FormControl className="lg:w-[calc(50%-10px)]">
          <Label text="job type" />
          <Select options={typeOptions} />
        </FormControl>
        <div className="flex w-full flex-col lg:w-[calc(50%-10px)]">
          <label className="pb-2 text-lg">Description</label>
          <textarea className="h-48 w-full resize-none rounded-md bg-off-white outline-blue-40"></textarea>
        </div>
        <FormButtonWrapper>
        <Button
          className="mr-2 border-blue-40 bg-blue-40 px-3 py-1 text-sm text-white shadow-md lg:text-base w-1/2 sm:w-[200px]"
          type="button"
        >
          Search
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
