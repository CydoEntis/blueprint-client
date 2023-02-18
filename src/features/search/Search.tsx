import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="my-5 flex flex-wrap items-center rounded-md bg-white p-5 text-grey-30 shadow-md">
      <h1 className="my-3  text-[1.75rem]">Search Your Jobs</h1>
      <form action="" className="flex w-full flex-wrap items-center gap-3">
        <div className="flex w-full flex-col lg:w-[30%]">
          <label className="pb-2 text-lg">Search Jobs</label>
          <input className="rounded-md bg-off-white px-3 py-1 outline-blue-40" type="text" />
        </div>

        <div className="flex w-full flex-col lg:w-[30%]">
          <label className="pb-2 text-lg">Status</label>
          <select className="rounded-md bg-off-white px-3 py-2 outline-blue-40">
            <option value="all">All</option>
            <option value="interview">Interview</option>
            <option value="declined">Declined</option>
            <option value="accepted">Accepted</option>
          </select>
        </div>

        <div className="flex w-full flex-col lg:w-[30%]">
          <label className="pb-2 text-lg">Type</label>
          <select className="rounded-md bg-off-white px-3 py-2 outline-blue-40">
            <option value="all">All</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        <div className="flex w-full flex-col lg:w-[30%]">
          <label className="pb-2 text-lg">Sort</label>
          <select className="rounded-md bg-off-white px-3 py-2 outline-blue-40">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
        <div className="flex gap-2 w-full md:w-1/2 items-end h-[70px]">
          <button className="w-1/2 bg-blue-10 border border-blue-40 text-blue-40 rounded-md py-1 sm:w-[200px]">Search</button>
          <button className="w-1/2 bg-red-10 border border-red-40 text-red-40 rounded-md py-1 sm:w-[200px]">Clear</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
