import { ChildrenProps } from "@/types/layout-types";

const Card = ({ children }: ChildrenProps) => {
  return (
    <div className="h-72 w-80 overflow-hidden rounded-2xl  bg-white drop-shadow-xl">
      {children}
    </div>
  );
};

export default Card;
