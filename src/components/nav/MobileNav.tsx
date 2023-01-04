import {
  ChartBarIcon,
  ClipboardDocumentIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <nav className="w-full">
      <ul>
        <li>
          <NavLink to="/stats">
            <ChartBarIcon className="h-8 w-8 cursor-pointer text-[#727177] hover:text-indigo-500" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">
            <ClipboardDocumentIcon className="h-8 w-8 cursor-pointer text-[#727177] hover:text-indigo-500" />
          </NavLink>
        </li>
        <li>
          {/* <NavLink to={""}>
            <MoonIcon className="h-8 w-8 cursor-pointer text-[#727177] hover:text-indigo-500" />
          </NavLink> */}
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
