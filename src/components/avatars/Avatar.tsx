import { useAppSelector } from "@/store/store";
import { AiOutlineUser } from "react-icons/ai";
import React from "react";

type Props = {
  className?: string;
};

const Avatar = ({ className }: Props) => {
  const user = useAppSelector(state => state.user.user);

  return (
    <div className={`${className} flex w-32 items-center justify-center bg-blue-40 text-white text-lg rounded-md`}>
      <AiOutlineUser className="text-2xl mr-3 " />
      <h3>{user.username}</h3>
    </div>
  );
};

export default Avatar;
