import { ChildrenProps } from "@/types/layout-types";
import { NavLink } from "react-router-dom";

type Props = ChildrenProps & {
  to: string;
};

const Card = ({ to, children }: Props) => {
  return (
    <NavLink
      end
      to={to}
      className={`w-80 overflow-hidden rounded-2xl  bg-white drop-shadow-xl`}
    >
      {children}
    </NavLink>
  );
};

export default Card;
