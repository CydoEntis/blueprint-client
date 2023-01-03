import React from "react";

type Props = {
  imgSrc: string;
  title: string;
  username: string;
  date: string;
};

const RecentActivity = ({ imgSrc, title, username, date }: Props) => {
  return (
    <div className="my-3 flex items-center p-3">
      <div className="h-10 w-10 rounded-full">
        <img className="rounded-full" src={imgSrc} alt="" />
      </div>
      <div className="mx-5 h-10">
        <h3>{title}</h3>
        <p className="font-italic text-grey-60 text-sm">{username}</p>
        <p className="text-grey-60 text-xs">{date}</p>
      </div>
    </div>
  );
};

export default RecentActivity;
