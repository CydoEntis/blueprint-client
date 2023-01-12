import React from "react";

type Props = {
  id: string;
  className?: string;
  numCols: number;
  numRows: number;
};

const TextArea = ({ id, className, numCols, numRows }: Props) => {
  return (
    <textarea
      id={id}
      className={`${className} mb-3 resize-none rounded-lg bg-off-white p-3 outline-accent-30`}
      cols={numCols}
      rows={numRows}
    ></textarea>
  );
};

export default TextArea;
