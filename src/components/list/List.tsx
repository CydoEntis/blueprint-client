import { ChildrenProps } from "@/types/layout-types";

const List = ({ children }: ChildrenProps) => {
  return (
    <div className="flex flex-wrap  gap-y-16 py-8  px-5 md:gap-x-1 lg:gap-x-8">
      {children}
    </div>
  );
};

export default List;
