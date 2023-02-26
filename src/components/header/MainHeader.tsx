import { HiMagnifyingGlass } from "react-icons/hi2";
import Avatar from "../avatars/Avatar";
import Freddy from "@/assets/freddy.jpg";
import Logo from "../logo/Logo";



const MainHeader = () => {
  return (
    <header className="flex items-center justify-start lg:justify-end p-8 lg:ml-80">
      <Avatar className="px-3 py-2 hidden lg:flex" />
      <Logo className="lg:hidden"/>
    </header>
  );
};

export default MainHeader;
