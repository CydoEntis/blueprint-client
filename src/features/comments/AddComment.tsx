import Button from "@/components/buttons/Button";
import React from "react";
import TextArea from "@/components/form/TextArea";

type Props = {};

const AddComment = (props: Props) => {
  return (
    <form
      className="flex flex-col"
      onSubmit={() => {
        console.log("Added comment");
      }}
    >
      <TextArea className="w-1/2" id="new-comment" numCols={50} numRows={5} />
      <Button
        type="submit"
        className="flex w-40 items-center justify-center rounded-xl border border-accent-30 bg-accent-10  py-2  px-5  text-accent-40 transition-all  duration-300 ease-in-out"
      >
        Add Comment
      </Button>
    </form>
  );
};

export default AddComment;
