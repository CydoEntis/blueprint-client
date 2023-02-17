import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="my-5 flex flex-wrap items-center text-grey-30 rounded-md bg-white p-5 shadow-md">
        <h1 className="text-[1.75rem]  my-3">Search Your Jobs</h1>
      <form
        action=""
        className="flex w-full flex-wrap items-center  gap-3"
      >
        <div className="flex w-[30%] flex-col">
          <label className="pb-2 text-lg">Search Jobs</label>
          <input className="rounded-md bg-off-white px-3 py-1" type="text" />
        </div>

        <div className="flex w-[30%] flex-col">
          <label className="pb-2 text-lg">Status</label>
          <select className="rounded-md bg-off-white px-3 py-2">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>

        <div className="flex w-[30%] flex-col">
          <label className="pb-2 text-lg">Type</label>
          <select className="rounded-md bg-off-white px-3 py-2">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>

        <div className="flex w-[30%] flex-col">
          <label className="pb-2 text-lg">Sort</label>
          <select className="rounded-md bg-off-white px-3 py-2">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <button className="">Search</button>
        <button>Clear</button>
      </form>
    </div>
  );
};

export default Search;
