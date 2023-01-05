import {
  ChartBarIcon,
  ClipboardDocumentIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ActionButton from "../buttons/ActionButton";
import MobileNavItem from "./MobileNavItem";

type Props = {
  onClose: () => void;
};

const MobileNav = ({ onClose }: Props) => {
  return (
    <nav className="fixed z-40 flex h-screen w-full flex-col justify-between bg-white p-5 md:hidden">
      <h1 className="ml-5 text-[3rem] text-gray-70">Ontrack</h1>
      <XMarkIcon
        className="text-gray-0 absolute right-5 top-5 h-8 w-8 text-gray-60 hover:text-red-400"
        onClick={onClose}
      />
      <ul className="flex w-full flex-col items-center">
        <MobileNavItem
          to="/stats"
          icon={<ChartBarIcon className="h-8 w-8 cursor-pointer" />}
          text="Stats"
        />

        <MobileNavItem
          to="/"
          icon={<ClipboardDocumentIcon className="h-8 w-8 cursor-pointer" />}
          text="Dashboard"
        />

        <MobileNavItem
          to="/theme"
          icon={<MoonIcon className="h-8 w-8 cursor-pointer" />}
          text="Theme"
        />
      </ul>
      <div className="flex w-full flex-col">
        <ActionButton
          className="w-full rounded-md bg-red-450 py-3 text-white drop-shadow-lg"
          onClick={() => console.log("Clicked")}
        >
          Logout
        </ActionButton>
        <ActionButton
          className="my-2 w-full rounded-md bg-indigo-500 py-3 text-white drop-shadow-lg"
          onClick={() => console.log("Clicked")}
        >
          Login
        </ActionButton>
        <ActionButton
          className="w-full rounded-md bg-indigo-300 py-3 text-white drop-shadow-lg"
          onClick={() => console.log("Clicked")}
        >
          Register
        </ActionButton>
      </div>
    </nav>
  );
};

export default MobileNav;
