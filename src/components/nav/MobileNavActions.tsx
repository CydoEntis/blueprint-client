import { fadeInVariants, staggerVariants } from "@/animation-variants/variants";
import {
  ArrowLeftOnRectangleIcon,
  PlusCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { BiUserPlus } from "react-icons/bi";
import { MdLogin, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import ActionButton from "../buttons/ActionButton";

const MobileNavActions = () => {
  return (
    <motion.div
      variants={staggerVariants}
      className="justify-centerpt-8 flex w-full py-5 text-lg"
    >
      {/* <ActionButton
        className=" flex items-center text-white"
        onClick={() => console.log("Clicked")}
      >
        <MdLogout className="mr-2 h-5 w-5" />
        Log out
      </ActionButton> */}
      <ActionButton
        className="mr-3 flex w-1/2 items-center justify-center border-r border-grey-40 px-5 text-grey-40"
        onClick={() => console.log("Clicked")}
      >
        <MdLogin className="mr-2 h-7 w-7" />
        Log in
      </ActionButton>
      <ActionButton
        className="mr-3 flex w-1/2 items-center justify-center px-5 text-grey-40"
        onClick={() => console.log("Clicked")}
      >
        <BiUserPlus className="mr-2 h-7 w-7" />
        Register
      </ActionButton>
    </motion.div>
  );
};

export default MobileNavActions;
