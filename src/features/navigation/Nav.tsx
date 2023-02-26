import Logo from "@/components/logo/Logo";
import { motion } from "framer-motion";
import MobileNavActions from "./NavActions";
import NavItems from "./NavItems";

type Props = {
  onClick: () => void;
  themeHandler: () => void;
};

const Nav = ({themeHandler, onClick}: Props) => {
  return (
    <div className="fixed hidden h-full  w-80 lg:flex">
      <motion.div className="flex h-screen w-full items-center  p-2 lg:h-full">
        <nav className="flex h-full w-full flex-col justify-between">
          <div className="">
            <Logo className="mb-32 py-5" />
            <NavItems onClick={onClick} themeHandler={themeHandler}/>
          </div>
          <MobileNavActions />
        </nav>
      </motion.div>
    </div>
  );
};

export default Nav;
