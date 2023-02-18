import Button from "@/components/buttons/Button";
import FormButton from "@/components/form/button/FormButton";
import Form from "@/components/form/Form";
import FormControl from "@/components/form/FormControl";
import FormTitle from "@/components/form/FormTitle";
import Input from "@/components/form/input/Input";
import Label from "@/components/form/label/Label";
import Select from "@/components/form/select/Select";
import FormButtonWrapper from "@/components/form/wrapper/FormButtonWrapper";
import { sortOptions, statusOptions, typeOptions } from "@/data/select-options";
import React from "react";

type Props = {};



const Search = (props: Props) => {
  return (
    <div className="my-5 flex flex-wrap items-center rounded-md bg-white p-5 text-grey-30 shadow-md">
      <FormTitle text="Search Your Jobs" />
      <Form className="w-full flex-wrap items-center gap-3" onSubmit={() => {}}>
        <FormControl className="lg:w-[30%]">
          <Label text="Search Jobs" />
          <Input type="text" />
        </FormControl>

        <FormControl className="lg:w-[30%]">
          <Label text="status" />
          <Select options={statusOptions} />
        </FormControl>

        <FormControl className="lg:w-[30%]">
          <Label text="type" />
          <Select options={typeOptions} />
        </FormControl>

        <FormControl className="lg:w-[30%]">
          <Label text="sort" />
          <Select options={sortOptions} />
        </FormControl>

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

export default Search;
