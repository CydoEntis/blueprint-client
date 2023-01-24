import Comment from "./Comment";
import React from "react";

type Props = {};

const Comments = (props: Props) => {
  return (
    <div className="flex h-96 w-5/6 flex-col overflow-y-auto p-3">
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
