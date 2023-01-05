import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation-variants/variants";

type Props = {
  to: string;
  icon: React.ReactNode;
  text: string;
};

const MobileNavItem = ({ to, icon, text }: Props) => {
  return (
    <motion.li
      variants={fadeInVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mb-3 flex w-full rounded-md py-1 px-3"
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "flex w-3/4 items-center justify-between rounded-md py-2 text-left text-xl text-white-60 hover:text-white-60"
            : "flex w-3/4 items-center justify-between rounded-md py-2 text-left text-xl text-blue-10 hover:text-white-60"
        }
      >
        <div className="border-1 border-blue-40 flex w-1/4 items-center justify-center">
          {icon}
        </div>
        <div className="w-3/4">{text}</div>
      </NavLink>
    </motion.li>
  );
};

export default MobileNavItem;
