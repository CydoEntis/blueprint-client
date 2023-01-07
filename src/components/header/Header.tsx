import { HiMagnifyingGlass } from "react-icons/hi2";

type Props = {
  title: string;
  iconColor: string;
  icon?: React.ReactNode;
};

const Header = ({ title, iconColor, icon }: Props) => {
  return (
    <header className="flex  items-center justify-between p-8 lg:ml-80">
      <div className="flex items-center">
        <HiMagnifyingGlass className="mr-3 h-6 w-6 text-grey-40" />
        <input
          type="text"
          placeholder="Search..."
          className="border-grey-40 text-lg text-grey-40 outline-none focus:border-b"
        />
      </div>
    </header>
  );
};

export default Header;
