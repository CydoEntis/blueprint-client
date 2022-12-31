import React from "react";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PhotoIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Freddy from "@/assets/freddy.jpg";
import James from "@/assets/james.jpg";
import Rachelle from "@/assets/rachelle.jpg";

type Props = {};

const TaskCard = (props: Props) => {
  return (
    <div className="relative flex h-72 w-11/12 flex-col items-center justify-center rounded-2xl bg-white p-5 drop-shadow-xl md:w-[19%]">
      <div className="mx-auto text-center">
        <h1 className="font-bold text-slate-700">App Development</h1>
        <p className="pb-3 text-sm  text-slate-400">Some text</p>
        <div className="relative mx-auto ml-4 flex h-8 items-center justify-center">
          <div className="border-1 absolute mr-12 h-8 w-8 rounded-full border-white">
            <img className="rounded-full" src={Freddy} alt="" />
          </div>
          <div className="border-1 absolute mr-5 h-8 w-8 rounded-full border-white ">
            <img className="rounded-full" src={Rachelle} alt="" />
          </div>
          <div className="border-1 border-whit absolute ml-3 h-8 w-8 rounded-full">
            <img className="rounded-full" src={James} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between py-1">
          <h3 className="text-sm font-bold">Progress</h3>
          <p className="text-xs font-bold">50%</p>
        </div>
        <div className="mx-auto h-2 w-full rounded-md bg-slate-300">
          <div className="h-2 w-2/4 rounded-md bg-green-500"></div>
        </div>
      </div>
      <div className="mt-3 flex w-full justify-between">
        <div className="flex items-center justify-center">
          <div className="mr-3 flex items-center justify-center">
            <PhotoIcon className="mr-2 h-6 w-6 text-slate-500" />
            <p className="text-sm">3</p>
          </div>
          <div className="flex items-center justify-center">
            <ChatBubbleOvalLeftEllipsisIcon className="mr-2 h-6 w-6 text-slate-500" />
            <p className="text-sm">5</p>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-2xl bg-green-100 py-1 px-3 ">
          <ClockIcon className="mr-1 h-4 w-4 text-green-500" />
          <p className="text-xs text-green-500">1 week left</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
