import { HiMagnifyingGlass } from "react-icons/hi2";
import Avatar from "../shared/avatars/Avatar";
import Freddy from "@/assets/freddy.jpg";

type Props = {
  title: string;
  iconColor: string;
  icon?: React.ReactNode;
};

const MainHeader = ({ title, iconColor, icon }: Props) => {
  return (
    <header className="flex items-center justify-between p-8 lg:ml-80">
      <div className="flex items-center">
        <HiMagnifyingGlass className="mr-3 h-6 w-6 text-grey-40" />
        <input
          type="text"
          placeholder="Search..."
          className="border-grey-40 text-lg text-grey-40 outline-none focus:border-b"
        />
      </div>
      <Avatar className="h-12 w-12" src={Freddy} />
    </header>
  );
};

export default MainHeader;
