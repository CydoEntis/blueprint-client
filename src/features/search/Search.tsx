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
import { getJobs, ISearchOptions } from "@/store/features/jobSlice";
import { useAppDispatch } from "@/store/store";
import React, { useState } from "react";

type Props = {};

const initialSearchState: ISearchOptions = {
  search: "",
  jobStatus: "all",
  jobType: "all",
  sort: "newest",
};

const Search = (props: Props) => {
  const dispatch = useAppDispatch();
  const [searchOptions, setSearchOptions] =
    useState<ISearchOptions>(initialSearchState);

  function onChangeHandler(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    setSearchOptions({
      ...searchOptions,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  }

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await dispatch(getJobs(searchOptions));
  }

  async function clearSearch() {
    setSearchOptions(initialSearchState);
    console.log(searchOptions);
    // await dispatch(getJobs(searchOptions));
  }

  return (
    <div className="my-5 flex flex-wrap items-center rounded-md bg-white p-5 text-grey-30 shadow-md">
      <FormTitle text="Search Your Jobs" />
      <Form className="w-full flex-wrap items-center gap-3" onSubmit={onSubmitHandler}>
        <FormControl className="lg:w-[30%]">
          <Label text="Search Jobs" />
          <Input type="text" name="search" value={searchOptions.search} onChange={onChangeHandler} />
        </FormControl>

        <FormControl className="lg:w-[30%]">
          <Label text="status" />
          <Select
            name="jobStatus"
            options={statusOptions}
            onChange={onChangeHandler}
            value={searchOptions.jobStatus}
          />
        </FormControl>

        <FormControl className="lg:w-[30%]">
          <Label text="type" />
          <Select
            name="jobType"
            options={typeOptions}
            onChange={onChangeHandler}
            value={searchOptions.jobType}
          />
        </FormControl>

        <FormControl className="lg:w-[30%]">
          <Label text="sort" />
          <Select
            options={sortOptions}
            name="sort"
            onChange={onChangeHandler}
            value={searchOptions.sort}
          />
        </FormControl>

        <FormButtonWrapper>
          <Button
            className="mr-2 w-1/2 border-blue-40 bg-blue-40 px-3 py-1 text-sm text-white shadow-md sm:w-[200px] lg:text-base"
            type="submit"
          >
            Search
          </Button>
          <Button
            className="mr-2 w-1/2 border-red-40 bg-red-40 px-3 py-1 text-sm text-white sm:w-[200px] lg:text-base"
            type="button"
            onClick={clearSearch}
          >
            Clear
          </Button>
        </FormButtonWrapper>
      </Form>
    </div>
  );
};

export default Search;
