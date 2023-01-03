import React from "react";

type Props = {
  title: string;
  date: string;
  children: React.ReactNode;
};

const RecentActivitesFeed = ({ title, date, children }: Props) => {
  return (
    <div className="my-2 w-full text-gray-70">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="">{date}</p>
      <div className=" flex flex-col">{children}</div>
    </div>
  );
};

export default RecentActivitesFeed;
