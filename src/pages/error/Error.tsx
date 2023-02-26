import React from "react";
import { Link, useRouteError } from "react-router-dom";

type Props = {};

const Error = (props: Props) => {
  const error = useRouteError();

  return (
    <div id="error-page" className="w-full h-screen flex flex-col justify-center items-center p-5">
      <h3 className="text-2xl text-blue-30 text-center">Whoops, that page seems to be missing</h3>
      <h1 className="text-[10rem] text-center text-blue-30">404</h1>
      <Link to="/jobs" className="text-xl text-blue-40 underline">Return to Jobs Page</Link>
    </div>
  );
};

export default Error;
