import { ChildrenProps } from "@/types/layout-types";
import { NavLink } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className="relative w-full rounded-lg bg-white p-5 shadow-md md:w-[calc(50%-10px)]">
      {children}
    </div>
  );
};

export default Card;
