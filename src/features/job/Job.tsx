import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineCalendar
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
  function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  }
  // rgb(178, 255, 128)
  return (
    <div className="w-full rounded-lg bg-white p-5 shadow-md md:w-1/2">
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
      <div className="w-full text-sm flex justify-between">
        <div>
          <div className="flex items-center text-grey-20 mb-1">
            <HiOutlineLocationMarker className=" mr-2 text-lg" />
            <h3 className=""> {location}</h3>
          </div>
          <div className="flex items-center text-grey-20 mb-1">
            <HiOutlineBriefcase className=" mr-2 text-lg" />
            <h3 className=""> {type}</h3>
          </div>
          <div className="flex items-center text-grey-20 mb-1">
            <HiOutlineClock className=" mr-2 text-lg" />
            <h3 className=""> {status}</h3>
          </div>
          <div className="flex items-center text-grey-20 mb-1">
            <HiOutlineCalendar className=" mr-2 text-lg" />
            <h3 className="">Dec 28, 2022</h3>
          </div>
        </div>
        <div>
   
        </div>
      </div>
    </div>
  );
};

export default Job;
