import React from "react";

type Props = {
  title: string;
  date: string;
  children: React.ReactNode;
};

const RecentActivitesFeed = ({ title, date, children }: Props) => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{date}</p>
      <div className="my-3 flex w-full flex-col">{children}</div>
    </div>
  );
};

export default RecentActivitesFeed;
