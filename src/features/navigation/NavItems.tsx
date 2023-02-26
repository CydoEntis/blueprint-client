import NavItem from "./NavItem";
import { MdDashboard } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TiDocumentAdd } from "react-icons/ti";

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
        to="/jobs?page=1"
        icon={
          <HiOutlineClipboardList className="h-8 w-8 cursor-pointer lg:h-6 lg:w-6" />
        }
        text="Jobs"
      />
      <NavItem
        to="/add-job"
        icon={
          <TiDocumentAdd className="h-8 w-8 cursor-pointer lg:h-6 lg:w-6" />
        }
        text="Add Job"
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
