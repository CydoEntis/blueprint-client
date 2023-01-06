import { ChildrenProps } from "@/types/layout-types";

const Card = ({ children }: ChildrenProps) => {
  return (
    <div className="w-72 rounded-2xl bg-white  drop-shadow-xl">{children}</div>
  );
};

export default Card;
