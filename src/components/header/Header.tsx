type Props = {
  title: string;
  iconColor: string;
  icon?: React.ReactNode;
};

const Header = ({ title, iconColor, icon }: Props) => {
  return (
    <header className="flex w-full items-center justify-between p-5">
      <div className="flex items-center">
        <div className={`mr-2 h-4 w-4 rounded-full bg-${iconColor}-450`}></div>
        <h1 className="text-2xl font-bold text-black-400">{title}</h1>
      </div>
      {icon}
    </header>
  );
};

export default Header;
