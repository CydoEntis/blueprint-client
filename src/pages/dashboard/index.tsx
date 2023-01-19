import StatsBlock from "@/features/dashboard/StatsBlock";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <StatsBlock count={50} text="In Progress" />
      <StatsBlock count={50} text="In Progress" />
      <StatsBlock count={50} text="In Progress" />
      <StatsBlock count={50} text="In Progress" />
    </div>
  );
};

export default index;
