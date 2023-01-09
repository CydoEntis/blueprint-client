import React from "react";

type Props = {
  onSubmit: () => void;
  title: string;
  btnText: string;
};

const Form = ({ onSubmit, title, btnText }: Props) => {
  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <h1 className="mb-5 text-2xl text-grey-30">{title}</h1>
      <label className="text-grey-30" htmlFor="title">
        Title
      </label>
      <input
        id="title"
        className="mb-3 rounded-lg bg-off-white p-3 outline-accent-30"
        type="text"
      />
      <label className="text-grey-30" htmlFor="description">
        Description
      </label>
      <textarea
        id="description"
        className="mb-3 rounded-lg bg-off-white p-3 outline-accent-30"
        cols={30}
        rows={10}
      ></textarea>
      <div>
        <button className="rounded-xl border border-accent-30 bg-accent-10 py-2 px-5 text-accent-40 hover:bg-accent-40 hover:text-white">
          {btnText}
        </button>
      </div>
    </form>
  );
};

export default Form;
