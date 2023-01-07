import NavItem from "./NavItem";
import { MdDashboard } from "react-icons/md";
import { IoStatsChart, IoMoon } from "react-icons/io5";

import { motion } from "framer-motion";
import { staggerVariants } from "@/animation-variants/variants";

const NavItems = () => {
  return (
    <motion.ul
      variants={staggerVariants}
      className="flex w-full flex-col items-center justify-center"
    >
      <NavItem
        to="/"
        icon={<MdDashboard className="h-8 w-8 cursor-pointer lg:h-6 lg:w-6" />}
        text="Dashboard"
      />
      <NavItem
        to="/stats"
        icon={<IoStatsChart className="h-8 w-8 cursor-pointer lg:h-6 lg:w-6" />}
        text="Stats"
      />
      <NavItem
        to="/theme"
        icon={<IoMoon className="h-8 w-8 cursor-pointer lg:h-6 lg:w-6" />}
        text="Theme"
      />
    </motion.ul>
  );
};

export default NavItems;
