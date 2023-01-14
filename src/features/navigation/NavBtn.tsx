import { fadeInVariants } from "@/animation-variants/variants";
import { ButtonProps } from "@/types/button-types";
import { motion } from "framer-motion";

const NavBtn = ({ onClick, className, children }: ButtonProps) => {
  return (
    <motion.button
      variants={fadeInVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default NavBtn;
