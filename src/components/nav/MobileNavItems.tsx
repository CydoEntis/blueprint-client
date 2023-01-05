import {
  ChartBarIcon,
  ClipboardDocumentIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import MobileNavItem from "./MobileNavItem";
import { MdDashboard } from "react-icons/md";
import { IoStatsChart, IoMoon } from "react-icons/io5";

import { motion } from "framer-motion";
import { staggerVariants } from "@/animation-variants/variants";

const MobileNavItems = () => {
  return (
    <motion.ul
      className="flex w-full flex-col items-center"
      variants={staggerVariants}
    >
      <MobileNavItem
        to="/stats"
        icon={<IoStatsChart className="h-8 w-8 cursor-pointer" />}
        text="Stats"
      />

      <MobileNavItem
        to="/"
        icon={<MdDashboard className="h-8 w-8 cursor-pointer" />}
        text="Dashboard"
      />

      <MobileNavItem
        to="/theme"
        icon={<IoMoon className="h-8 w-8 cursor-pointer" />}
        text="Theme"
      />
    </motion.ul>
  );
};

export default MobileNavItems;
