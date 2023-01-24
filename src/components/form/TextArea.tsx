import React from "react";

type Props = {
  id: string;
  className?: string;
  numCols: number;
  numRows: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ id, className, numCols, numRows, onChange }: Props) => {
  return (
    <textarea
      id={id}
      className={`${className} mb-3 resize-none rounded-lg p-3 outline-accent-30`}
      cols={numCols}
      rows={numRows}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
