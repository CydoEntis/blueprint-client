import { motion } from "framer-motion";
import MobileNavActions from "./NavActions";
import NavItems from "./NavItems";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="fixed hidden h-screen w-80 lg:flex">
      <motion.div className="flex h-screen w-full items-center p-2">
        <nav className="flex h-4/6  w-full flex-col justify-between">
          <NavItems />
          <MobileNavActions />
        </nav>
      </motion.div>
    </div>
  );
};

export default Nav;
