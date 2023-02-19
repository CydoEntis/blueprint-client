import { HiMagnifyingGlass } from "react-icons/hi2";
import Avatar from "../avatars/Avatar";
import Freddy from "@/assets/freddy.jpg";

type Props = {
  title: string;
  iconColor: string;
  icon?: React.ReactNode;
};

const MainHeader = ({ title, iconColor, icon }: Props) => {
  return (
    <header className="flex items-center justify-end p-8 lg:ml-80">
      <Avatar className="px-3 py-2" src={Freddy} />
    </header>
  );
};

export default MainHeader;
