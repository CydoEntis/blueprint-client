import React from "react";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PhotoIcon,
  ClockIcon,
  PaintBrushIcon,
  LightBulbIcon,
  ServerIcon,
  FingerPrintIcon,
  ClipboardDocumentCheckIcon,
  BugAntIcon,
} from "@heroicons/react/24/outline";
import Freddy from "@/assets/freddy.jpg";
import James from "@/assets/james.jpg";
import Rachelle from "@/assets/rachelle.jpg";

// Change type to use enums
type Props = {
  type: string;
};

const TaskCard = ({ type }: Props) => {
  let typeIcon;
  let typeCss = "";

  if (type === "bug") {
    typeCss += "bg-red-450";
    typeIcon = <BugAntIcon className="h-10 w-10 text-white" />;
  } else if (type === "frontend") {
    typeCss += "bg-green-450";
    typeIcon = <PaintBrushIcon className="h-10 w-10 text-white" />;
  } else if (type === "backend") {
    typeCss += "bg-yellow-450";
    typeIcon = <ServerIcon className="h-10 w-10 text-white" />;
  } else if (type === "security") {
    typeCss += "bg-blue-450";
    typeIcon = <FingerPrintIcon className="h-10 w-10 text-white" />;
  } else if (type === "uiux") {
    typeCss += "bg-indigo-450";
    typeIcon = <LightBulbIcon className="h-10 w-10 text-white" />;
  } else if (type === "testing") {
    typeCss += "bg-orange-450";
    typeIcon = <ClipboardDocumentCheckIcon className="h-10 w-10 text-white" />;
  }
  return (
    <div className="relative h-72 w-11/12 max-w-md rounded-tr-2xl rounded-br-2xl border-l-8 border-indigo-500 bg-white  drop-shadow-xl">
      <div className="flex h-10 w-full rounded-t-2xl">
        <div className="h-full w-1/2 rounded-tl-2xl"></div>
        <div className="flex h-full w-1/2 items-center justify-center rounded-tr-2xl bg-[#f1f1f1]">
          <h3>Description</h3>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        <div className="mx-auto text-center">
          {/* <div
          className={`${typeCss} left-50 absolute -top-5 flex h-16 w-16 translate-x-1/2 transform items-center justify-center rounded-md`}
        >
          {typeIcon}
        </div> */}
          <h1 className="font-bold text-black-400">App Development</h1>
          <p className="pb-3 text-sm text-grey-550">Some text</p>
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
            <h3 className="text-sm font-bold text-black-400">Progress</h3>
            <p className="text-xs font-bold text-black-400">50%</p>
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
    </div>
  );
};

export default TaskCard;
