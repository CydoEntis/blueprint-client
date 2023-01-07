type Props = {
  title: string;
  iconColor: string;
  icon?: React.ReactNode;
};

const Header = ({ title, iconColor, icon }: Props) => {
  return (
    <header className="flex  items-center justify-between p-8 lg:ml-80">
      <div className="flex items-center">
        <div className={`h-4 w-4 rounded-full bg-${iconColor}-450`}></div>
        <h1 className="mx-2 text-2xl font-bold text-black-400">{title}</h1>
        {icon}
      </div>
    </header>
  );
};

export default Header;
