import { ReactNode } from "react";

export type HeaderProps = {
  text: string;
  icon: ReactNode;
  onClick: () => void;
  styles: string;
};
