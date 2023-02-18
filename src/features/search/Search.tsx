import FormButton from "@/components/form/button/FormButton";
import Form from "@/components/form/Form";
import FormControl from "@/components/form/FormControl";
import Input from "@/components/form/input/Input";
import Label from "@/components/form/label/Label";
import Select from "@/components/form/select/Select";
import FormButtonWrapper from "@/components/form/wrapper/FormButtonWrapper";
import React from "react";

type Props = {};

const statusOptions = [
  {
    id: 1,
    value: "all",
  },
  {
    id: 2,
    value: "interview",
  },
  {
    id: 3,
    value: "declined",
  },
  {
    id: 4,
    value: "accepted",
  },
];

const typeOptions = [
  {
    id: 1,
    value: "full-time",
  },
  {
    id: 2,
    value: "part-time",
  },
  {
    id: 3,
    value: "internship",
  },
];

const sortOptions = [
  {
    id: 1,
    value: "newest",
  },
  {
    id: 2,
    value: "oldest",
  },
  {
    id: 3,
    value: "a-z",
  },
  {
    id: 4,
    value: "z-a",
  },
];

const Search = (props: Props) => {
  return (
    <div className="my-5 flex flex-wrap items-center rounded-md bg-white p-5 text-grey-30 shadow-md">
      <h1 className="my-3 text-[1.75rem]">Search Your Jobs</h1>
      <Form
        className="w-full flex-wrap items-center gap-3"
        onSubmit={() => {}}
      >
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
          <FormButton
            className="border-blue-40 bg-blue-10 py-1 text-blue-40"
            text="search"
          />
          <FormButton
            className="border-red-40 bg-red-10 py-1 text-red-40"
            text="clear"
          />
        </FormButtonWrapper>
      </Form>
    </div>
  );
};

export default Search;
