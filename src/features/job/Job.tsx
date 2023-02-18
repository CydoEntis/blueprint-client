import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineCalendar,
} from "react-icons/hi";

type Props = {
  role: string;
  company: string;
  location: string;
  interviewDate: string;
  type: string;
  status: string;
};

const Job = ({
  role,
  company,
  location,
  interviewDate,
  type,
  status,
}: Props) => {
  return (
    <div className="w-full rounded-lg bg-white p-5 shadow-md md:w-[calc(50%-10px)]">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h3 className="text-xl text-grey-40">{role}</h3>
          <h3 className="text-md text-grey-30">{company}</h3>
        </div>
        <p className="py-3 text-sm text-grey-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil labore
          aut earum
        </p>
      </div>
      <div className="flex justify-center py-1 text-sm">
        <div className="w-1/2">
          <div className="mb-3 flex items-center text-grey-20">
            <HiOutlineLocationMarker className=" mr-2 text-lg" />
            <h3 className=""> {location}</h3>
          </div>
          <div className="mb-3 flex items-center text-grey-20">
            <HiOutlineBriefcase className=" mr-2 text-lg" />
            <h3 className=""> {type}</h3>
          </div>
          <div className="mb-2 w-[75px] shrink rounded-md border border-blue-40 bg-blue-50 px-2 py-1 text-sm text-blue-40">
            <h3>Internship</h3>
          </div>
        </div>
        <div className="w-1/2">
          <div className="mb-3 flex items-center text-grey-20">
            <HiOutlineClock className=" mr-2 text-lg" />
            <h3 className=""> {status}</h3>
          </div>
          <div className="mb-3 flex items-center text-grey-20">
            <HiOutlineCalendar className=" mr-2 text-lg" />
            <h3 className="">Dec 28, 2022</h3>
          </div>
          <div className="mb-3 max-w-[100px] rounded-md border border-yellow-40 bg-yellow-50 px-2 py-1 text-center text-sm text-yellow-40 ">
            <h3>Pending</h3>
          </div>
        </div>
      </div>

      <div className="">
        <button className="mr-2 rounded-md border border-green-40 bg-green-10 px-3 py-1 text-sm text-green-40">
          Edit
        </button>
        <button className="mr-2 rounded-md border border-red-40 bg-red-10 px-3 py-1 text-sm text-red-40">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Job;
