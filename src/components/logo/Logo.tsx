import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation-variants/variants";
import Freddy from "@/assets/freddy.jpg";

type Props = {};

const Logo = (props: Props) => {
  return (
    <motion.div
      variants={fadeInVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex w-3/4 items-center p-3"
    >
      <img className="mr-3 h-8 w-8 rounded-full" src={Freddy} alt="" />
      {/* <h1 className="flex items-center justify-center  rounded-md bg-blue-50 px-3 py-2 text-center text-[1.75rem] text-white">
        <WrenchScrewdriverIcon className="mr-2 h-8 w-8" /> Blueprint
      </h1> */}
      <div>
        <h1 className="text-white-60">Freddy Bojangles</h1>
        <p className="text-[.65rem] text-blue-10">Full Stack Developer</p>
      </div>
    </motion.div>
  );
};

export default Logo;
