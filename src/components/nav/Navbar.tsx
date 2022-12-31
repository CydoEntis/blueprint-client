import React from "react";
import { Link } from "react-router-dom";
import FilterButton from "./FilterButton";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="z-30 flex w-full gap-3  p-3">
      <FilterButton title="All" count={80} />
      <FilterButton title="In Progress" count={30} />
      <FilterButton title="In Review" count={15} />
      <FilterButton title="Issue" count={5} />
      <FilterButton title="Completed" count={25} />
    </div>
  );
};

export default Navbar;
