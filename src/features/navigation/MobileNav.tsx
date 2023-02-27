import { motion } from "framer-motion";
import NavActions from "./NavActions";
import NavItems from "./NavItems";
import Avatar from "@/components/avatars/Avatar";

const slideVariants = {
  open: { width: "100vw", opacity: 1, x: 0, display: 'block' },
  closed: { width: 0, opacity: 0, x: "-100%", display: "none" },
};

type Props = {
  isOpen: boolean;
  onClick: () => void;
  themeHandler: () => void;
  theme: string;
};

const MobileNav = ({ isOpen, onClick, themeHandler, theme }: Props) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed" }
      variants={slideVariants}
      className="fixed z-40 flex w-full h-screen items-center bg-white p-2 lg:hidden dark:bg-zinc-900"
    >
      <nav className="flex h-full w-full flex-col justify-evenly items-center">
        <Avatar className="w-60 h-14" />
        <NavItems onClick={onClick} themeHandler={themeHandler} theme={theme}/>
        <NavActions />
      </nav>
    </motion.div>
  );
};

export default MobileNav;
