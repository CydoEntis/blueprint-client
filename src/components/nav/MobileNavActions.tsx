import { fadeInVariants, staggerVariants } from "@/animation-variants/variants";
import { motion } from "framer-motion";
import ActionButton from "../buttons/ActionButton";

const MobileNavActions = () => {
  return (
    <motion.div variants={staggerVariants} className="flex w-full flex-col">
      <ActionButton
        className="w-full rounded-md bg-red-450 py-3 text-white drop-shadow-lg"
        onClick={() => console.log("Clicked")}
      >
        Logout
      </ActionButton>
      <ActionButton
        className="my-2 w-full rounded-md bg-blue-50 py-3 text-white drop-shadow-lg"
        onClick={() => console.log("Clicked")}
      >
        Login
      </ActionButton>
      <ActionButton
        className="w-full rounded-md bg-blue-40 py-3 text-white drop-shadow-lg"
        onClick={() => console.log("Clicked")}
      >
        Register
      </ActionButton>
    </motion.div>
  );
};

export default MobileNavActions;
