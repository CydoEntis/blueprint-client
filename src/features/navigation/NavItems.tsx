import NavItem from "./NavItem";
import { MdDashboard } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TiDocumentAdd } from "react-icons/ti";

import { motion } from "framer-motion";
import { staggerVariants } from "@/animation-variants/variants";
import Button from "@/components/buttons/Button";
import { useEffect, useState } from "react";

type Props = {
  onClick: () => void;
  themeHandler: () => void;
};

const NavItems = ({ onClick, themeHandler}: Props) => {


  return (
    <motion.ul
      variants={staggerVariants}
      className="flex w-full flex-col items-center justify-center"
    >
      <NavItem
        to="/"
        icon={<MdDashboard className="h-8 w-8 cursor-pointer lg:h-6 lg:w-6" />}
        text="Dashboard"
        onClick={onClick}
      />
      <NavItem
        to="/jobs"
        icon={
          <HiOutlineClipboardList className="h-8 w-8 cursor-pointer lg:h-6 lg:w-6" />
        }
        text="Jobs"
        onClick={onClick}
      />
      <NavItem
        to="/add-job"
        icon={
          <TiDocumentAdd className="h-8 w-8 cursor-pointer lg:h-6 lg:w-6" />
        }
        text="Add Job"
        onClick={onClick}
      />
      <Button className="border-white flex w-full items-center justify-center rounded-xl py-2  px-5 text-xl text-grey-30 dark:text-off-white transition-all  duration-300  ease-in-out  hover:border hover:border-accent-30 hover:bg-accent-10 hover:text-accent-40 dark:border-zinc-900" onClick={themeHandler} type="button" >Theme</Button>
    </motion.ul>
  );
};

export default NavItems;
