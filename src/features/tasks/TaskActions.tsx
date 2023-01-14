import ActionButton from "@/features/navigation/NavBtn";
import { PlusIcon } from "@heroicons/react/24/solid";

type Props = {};

const TaskActions = (props: Props) => {
  return (
    <div className="lg:border-gray-55 mb-5 flex w-full justify-end py-3 px-5 lg:border-b-2">
      <ActionButton
        className="fixed bottom-5 right-5 z-30 flex w-32 items-center justify-center rounded-md bg-blue-50 py-2 text-white drop-shadow-lg lg:static"
        onClick={() => console.log("Clicked")}
      >
        <PlusIcon className="mr-1 h-5 w-5" />
        New Task
      </ActionButton>
    </div>
  );
};

export default TaskActions;
