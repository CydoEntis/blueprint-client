import { motion } from "framer-motion";
import NavItems from "./NavItems";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="fixed hidden h-screen w-80 border-r border-gray-60 lg:flex">
      <motion.div className="items-centerp-2 flex h-screen w-full">
        <nav className="flex h-4/6  w-full flex-col justify-between border-2 border-red-500">
          <NavItems />
        </nav>
      </motion.div>
    </div>
  );
};

export default Nav;
