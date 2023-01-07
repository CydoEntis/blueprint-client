import React from "react";

type Props = {
  src: string;
  className?: string;
};

const Avatar = ({ className, src }: Props) => {
  return (
    <div className={`${className} h-8 w-8 rounded-full border-2 border-white`}>
      <img className="rounded-full" src={""} alt="" />
    </div>
  );
};

export default Avatar;
