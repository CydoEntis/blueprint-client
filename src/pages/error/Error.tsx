import React from "react";
import { useRouteError } from "react-router-dom";

type Props = {};

const Error = (props: Props) => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Error Page</h1>
    </div>
  );
};

export default Error;
