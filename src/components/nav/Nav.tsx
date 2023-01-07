import { motion } from "framer-motion";
import Logo from "../logo/Logo";
import MobileNavActions from "./NavActions";
import NavItems from "./NavItems";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="fixed hidden h-full  w-80 lg:flex">
      <motion.div className="flex h-screen w-full items-center  p-2 lg:h-full">
        <nav className="flex h-full w-full flex-col justify-between">
          <div className="">
            <Logo />
            <NavItems />
          </div>
          <MobileNavActions />
        </nav>
      </motion.div>
    </div>
  );
};

export default Nav;
