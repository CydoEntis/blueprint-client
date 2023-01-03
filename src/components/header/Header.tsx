import React from "react";
import { HeaderProps } from "@/types/header-types";
import ActionButton from "../buttons/ActionButton";

const Header = ({ text, icon, onClick, styles }: HeaderProps) => {
  return (
    <head className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-black-400">Projects</h1>
      <ActionButton text={text} icon={icon} onClick={onClick} styles={styles} />
    </head>
  );
};

export default Header;
