import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation-variants/variants";

type Props = {
  to: string;
  icon: React.ReactNode;
  text: string;
};

const NavItem = ({ to, icon, text }: Props) => {
  return (
    <motion.li
      variants={fadeInVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mb-5 flex w-full rounded-md py-1 px-3"
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "flex w-full items-center justify-center rounded-xl border border-accent-30 bg-accent-10 py-2 px-5  text-xl text-accent-40  transition-all  duration-300 ease-in-out  "
            : "flex w-full items-center justify-center rounded-xl py-2  px-5 text-xl text-grey-30 transition-all  duration-300  ease-in-out  hover:border hover:border-accent-30 hover:bg-accent-10 hover:text-accent-40"
        }
      >
        <div className="flex h-full w-full items-center justify-center ">
          <div className="pr flex w-1/6 items-center justify-end px-2">
            {icon}
          </div>
          <div className="flex w-1/3 items-center px-3">{text}</div>
        </div>
      </NavLink>
    </motion.li>
  );
};

export default NavItem;
