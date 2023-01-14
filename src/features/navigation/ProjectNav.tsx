import ActionButton from "@/features/navigation/NavBtn";

type Props = {};

const ProjectNav = (props: Props) => {
  return (
    <div className="z-30 hidden w-full gap-10 pl-5 md:flex ">
      <ActionButton
        className="text-gray-60 border-b-2 border-transparent pb-3 text-sm font-bold hover:border-blue-50"
        onClick={() => console.log("Discussion Clicked")}
      >
        Tasks
      </ActionButton>
      <ActionButton
        className="text-gray-60 border-b-2 border-transparent pb-3 text-sm font-bold hover:border-blue-50"
        onClick={() => console.log("Discussion Clicked")}
      >
        Discussion
      </ActionButton>
      <ActionButton
        className="text-gray-60 border-b-2 border-transparent pb-3 text-sm font-bold hover:border-blue-50"
        onClick={() => console.log("Discussion Clicked")}
      >
        Timeline
      </ActionButton>
      <ActionButton
        className="text-gray-60 border-b-2 border-transparent pb-3 text-sm font-bold hover:border-blue-50"
        onClick={() => console.log("Discussion Clicked")}
      >
        Files
      </ActionButton>
      <ActionButton
        className="text-gray-60 border-b-2 border-transparent pb-3 text-sm font-bold hover:border-blue-50"
        onClick={() => console.log("Discussion Clicked")}
      >
        Overview
      </ActionButton>
    </div>
  );
};

export default ProjectNav;
