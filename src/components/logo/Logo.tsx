import React from "react";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation-variants/variants";
import {
  HomeIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

type Props = {};

const Logo = (props: Props) => {
  return (
    <motion.div
      variants={fadeInVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-3/4"
    >
      <h1 className="flex items-center justify-center  rounded-md bg-blue-50 px-3 py-2 text-center text-[1.75rem] text-white">
        <WrenchScrewdriverIcon className="mr-2 h-8 w-8" /> Blueprint
      </h1>
    </motion.div>
  );
};

export default Logo;
