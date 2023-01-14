import { useState } from "react";
import { motion } from "framer-motion";
import ActionButton from "./NavBtn";
import Toggle from "./Toggle";
import NavActions from "./NavActions";
import User from "../../components/user/User";
import NavItems from "./NavItems";

const slideVariants = {
  open: { width: "100vw", opacity: 1, x: 0 },
  closed: { width: 0, opacity: 0, x: "-100%" },
};

type Props = {
  isOpen: boolean;
};

const MobileNav = ({ isOpen }: Props) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={slideVariants}
      className="fixed z-40 flex h-screen items-center bg-white p-2 lg:hidden"
    >
      <nav className="flex h-full w-full flex-col justify-evenly">
        <User />
        <NavItems />
        <NavActions />
      </nav>
    </motion.div>
  );
};

export default MobileNav;
