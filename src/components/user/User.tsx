import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation-variants/variants";
import Freddy from "@/assets/freddy.jpg";

type Props = {};

const User = (props: Props) => {
  return (
    <motion.div
      variants={fadeInVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex w-full flex-col items-center justify-center p-3"
    >
      <img className="mr-3 h-20 w-20 rounded-full" src={Freddy} alt="" />
      <div className="w-full py-3 text-center">
        <h1 className="text-grey-40">Freddy Bojangles</h1>
        <p className="text-grey-30 text-[.65rem]">Full Stack Developer</p>
      </div>
    </motion.div>
  );
};

export default User;
