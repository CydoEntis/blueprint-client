import NavItem from "./NavItem";
import { MdDashboard } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TiDocumentAdd } from "react-icons/ti";

import { motion } from "framer-motion";
import { staggerVariants } from "@/animation-variants/variants";

type Props = {
  onClick: () => void;
};

const NavItems = ({ onClick }: Props) => {
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

    </motion.ul>
  );
};

export default NavItems;
