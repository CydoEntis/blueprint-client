import ContentWrapper from "@/components/wrapper/ContentWrapper";
import React from "react";

type Props = {};

const AddJobPage = (props: Props) => {
  return (
    <ContentWrapper>
      <div className="w-full rounded-md bg-white p-5 text-grey-30 shadow-md ">
        <h1 className="my-3  text-[1.75rem]">Add A Job</h1>
        <form action="" className="flex w-full flex-wrap items-center gap-3">
        
          <div className="flex w-full flex-col lg:w-[calc(50%-10px)]">
            <label className="pb-2 text-lg">Position</label>
            <input
              className="rounded-md bg-off-white px-3 py-1 outline-blue-40"
              type="text"
            />
          </div>
          <div className="flex w-full flex-col lg:w-[calc(50%-10px)]">
            <label className="pb-2 text-lg">Company</label>
            <input
              className="rounded-md bg-off-white px-3 py-1 outline-blue-40"
              type="text"
            />
          </div>
          <div className="flex w-full flex-col lg:w-[calc(50%-10px)]">
            <label className="pb-2 text-lg">Location</label>
            <input
              className="rounded-md bg-off-white px-3 py-1 outline-blue-40"
              type="text"
            />
          </div>
          <div className="flex w-full flex-col lg:w-[calc(50%-10px)]">
            <label className="pb-2 text-lg">Job Type</label>
            <select className="rounded-md bg-off-white px-3 py-2 outline-blue-40">
              <option value="all">All</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div className="flex w-full flex-col lg:w-[calc(50%-10px)]">
            <label className="pb-2 text-lg">Description</label>
            <textarea className="rounded-md w-full h-48 bg-off-white resize-none outline-blue-40"></textarea>
          </div>
          <div className="flex h-[70px] w-full items-end gap-2 md:w-1/2">
            <button className="w-1/2 rounded-md border border-blue-40 bg-blue-10 py-1 text-blue-40 sm:w-[200px] ">
              Submit
            </button>
            <button className="w-1/2 rounded-md border border-red-40 bg-red-10 py-1 text-red-40 sm:w-[200px]">
              Clear
            </button>
          </div>
        </form>
      </div>
    </ContentWrapper>
  );
};

export default AddJobPage;
