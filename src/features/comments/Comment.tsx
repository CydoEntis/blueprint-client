import Avatar from "@/components/avatars/Avatar";
import React from "react";

type Props = {};

const Comment = (props: Props) => {
  return (
    <div className="py-3">
      <div className=" flex-col border-b border-off-white py-3">
        <div className="flex items-center">
          <Avatar
            className="mr-2 h-10 w-10"
            src="https://www.fakepersongenerator.com/Face/female/female20171026234465515.jpg"
          />
          <h3 className="mr-2 text-grey-40 ">Kathleen Q Mincey</h3>
          <p className="text-xs text-grey-20">41m ago</p>
        </div>
        <p className="p-2 text-sm text-grey-40">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
          reiciendis, harum facere aut temporibus nesciunt explicabo iure
          praesentium beatae placeat? Veniam, dolor labore amet neque omnis
          nesciunt numquam maxime eligendi.
        </p>
      </div>
    </div>
  );
};

export default Comment;
