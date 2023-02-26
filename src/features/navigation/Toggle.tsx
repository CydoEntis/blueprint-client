import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const Toggle = ({ isOpen, onClick }: Props) => {
  return (
    <div
      className="fixed top-5 right-5 z-40 rounded-md border border-accent-30 bg-white p-1.5 drop-shadow-lg hover:bg-accent-10 lg:hidden"
      onClick={onClick}
    >
      {isOpen ? (
        <XMarkIcon className="h-8 w-8 text-blue-30" />
      ) : (
        <Bars3BottomRightIcon className="h-8 w-8 text-blue-30" />
      )}
    </div>
  );
};

export default Toggle;
