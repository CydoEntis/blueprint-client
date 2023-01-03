import React, { ReactNode } from "react";
import { HeaderProps } from "@/types/header-types";

const ActionButton = ({ text, icon, onClick, styles }: HeaderProps) => {
  return (
    <button onClick={onClick} className={styles}>
      {icon} {text}
    </button>
  );
};

export default ActionButton;
