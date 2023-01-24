import { AiTwotoneCalendar } from "react-icons/ai";
import Tag from "@/components/tags/Tag";

type Props = {};

const TaskHeader = (props: Props) => {
  return (
    <div className="py-5">
      <h1 className="text-[2.15rem] font-bold text-grey-40">
        Mobile App Design
      </h1>
      <div className="flex">
        <Tag text={"ui/ux"} />
        <Tag text={"mobile"} />
      </div>
      <p className=" py-5 text-sm text-grey-20">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
        consequuntur libero cumque dicta saepe. Tempore at distinctio non
        necessitatibus aliquid porro natus adipisci. Ullam consequatur aliquam
        pariatur. Voluptate, optio assumenda!
      </p>
      <div className="flex w-32 items-center rounded-full border border-green-30 bg-green-10 px-3 py-1 text-xs text-green-40">
        <AiTwotoneCalendar className="mr-1 text-lg" />
        <p>Feb 16, 2023</p>
      </div>
    </div>
  );
};

export default TaskHeader;
