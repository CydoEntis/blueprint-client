import Button from "@/components/buttons/Button";
import Card from "@/components/cards/Card";
import Detail from "@/components/detail/Detail";
import FlexCol from "@/components/helpers/FlexCol";
import Tag from "@/components/tags/Tag";
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
    <Card>
      <FlexCol>
        <FlexCol>
          <h3 className="text-xl text-grey-40">{role}</h3>
          <h3 className="text-md text-grey-30">{company}</h3>
        </FlexCol>
        <p className="py-3 text-sm text-grey-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil labore
          aut earum
        </p>
      </FlexCol>
      <div className="flex justify-center py-1 ">
        <div className="mb-5 w-1/2">
          <Detail>
            <HiOutlineLocationMarker className="mr-2 text-lg" />
            <h3 className="text-sm lg:text-base">{location}</h3>
          </Detail>
          <Detail>
            <HiOutlineBriefcase className=" mr-2 text-lg" />
            <h3 className="text-sm lg:text-base"> {type}</h3>
          </Detail>
          <Tag text={status} />
        </div>
        <div className="w-1/2">
          <Detail>
            <HiOutlineClock className="mr-2 text-lg" />
            <h3 className="text-sm lg:text-base"> {status}</h3>
          </Detail>
          <Detail>
            <HiOutlineCalendar className="mr-2 text-lg" />
            <h3 className="text-sm lg:text-base">Dec 28, 2022</h3>
          </Detail>
        </div>
      </div>

      <div className="flex w-full justify-end">
        <Button
          className="mr-2 border-blue-40 bg-blue-40 px-3 py-1 text-sm text-white shadow-md lg:text-base"
          type="button"
        >
          Edit
        </Button>
        <Button
          className="mr-2 border-red-40 bg-red-40 px-3 py-1 text-sm text- lg:text-base"
          type="button"
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default Job;
