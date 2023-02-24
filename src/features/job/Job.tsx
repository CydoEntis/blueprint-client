import Button from "@/components/buttons/Button";
import Card from "@/components/cards/Card";
import Detail from "@/components/detail/Detail";
import FlexCol from "@/components/helpers/FlexCol";
import Tag from "@/components/tags/Tag";
import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {
  id: string | undefined
  position: string;
  company: string;
  location: string;
  interviewDate?: string;
  type: string;
  status: string;
  createdAt: string;
};

const Job = ({
  id,
  position,
  company,
  location,
  interviewDate,
  type,
  status,
  createdAt,
}: Props) => {
  return (
    <Card>
      <FlexCol>
        <FlexCol>
          <h3 className="text-xl text-grey-40">{position}</h3>
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
            <HiOutlineCalendar className="mr-2 text-lg" />
            <h3 className="text-sm lg:text-base">Applied on: {createdAt}</h3>
          </Detail>
          {interviewDate !== "" && (
            <Detail>
              <HiOutlineCalendar className="mr-2 text-lg" />
              <h3 className="text-sm lg:text-base">
                Interview on: {interviewDate}
              </h3>
            </Detail>
          )}
        </div>
      </div>

      <div className="flex w-full justify-end">
        <Link to={`/jobs/${id}`}
          className="mr-2 border-blue-40 bg-blue-40 px-3 py-1 text-sm text-white shadow-md lg:text-base rounded-md border transition-all duration-300 ease-in-out capitalize hover:opacity-75"
          type="button"
        >
          Edit
        </Link>
        <Button
          className="mr-2 border-red-40 bg-red-40 px-3 py-1 text-sm text-white lg:text-base"
          type="button"
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default Job;
