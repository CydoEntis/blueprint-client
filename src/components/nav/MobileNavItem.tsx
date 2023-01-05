import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  icon: React.ReactNode;
  text: string;
};

const MobileNavItem = ({ to, icon, text }: Props) => {
  return (
    <li className="mb-3 flex w-full rounded-md py-1 px-3">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "flex w-full items-center justify-between rounded-md bg-gray-55 py-2 text-left text-xl text-indigo-500 hover:bg-gray-55 hover:text-indigo-500"
            : "flex w-full items-center justify-between rounded-md py-2 text-left text-xl text-gray-70 hover:bg-gray-55 hover:text-indigo-500"
        }
      >
        <div className="flex w-1/4 items-center justify-center">{icon}</div>
        <div className="w-3/4">{text}</div>
      </NavLink>
    </li>
  );
};

export default MobileNavItem;
