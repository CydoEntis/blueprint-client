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
            ? "flex w-full items-center justify-center rounded-2xl bg-accent-50 py-3 text-left text-xl text-white hover:text-white"
            : "flex w-full items-center justify-center rounded-2xl py-3 text-left text-xl text-grey-40  hover:bg-accent-50 hover:text-white"
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
