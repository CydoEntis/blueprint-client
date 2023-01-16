import React from "react";
import Comment from "./Comment";

type Props = {};

const Comments = (props: Props) => {
  return (
    <div className="mx-auto flex h-96 w-5/6 flex-col overflow-y-auto rounded-2xl bg-white p-3">
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
