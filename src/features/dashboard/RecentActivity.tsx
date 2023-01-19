import React from "react";

type Props = {
  imgSrc: string;
  title: string;
  username: string;
  date: string;
};

const RecentActivity = ({ imgSrc, title, username, date }: Props) => {
  return (
    <div className="my-1 flex h-full items-center rounded-lg p-2">
      <div className="h-10 w-10 rounded-full">
        <img className="rounded-full" src={imgSrc} alt="" />
      </div>
      <div className="mx-5">
        <h3 className="text-gray-70">{title}</h3>
        <p className="font-italic text-sm text-gray-60">{username}</p>
        <p className="text-xs text-gray-60">{date}</p>
      </div>
    </div>
  );
};

export default RecentActivity;
