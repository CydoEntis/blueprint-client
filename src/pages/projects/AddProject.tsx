import Form from "@/components/shared/form/Form";
import React from "react";

type Props = {};

const AddProject = (props: Props) => {
  return (
    <Form onSubmit={() => console.log("Submitted")}>
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

      <select>
        <option>Joe</option>
        <option>Jane</option>
        <option>Jack</option>
      </select>
      <input type="date" />
      <div>
        <button className="rounded-xl border border-accent-30 bg-accent-10 py-2 px-5 text-accent-40 hover:bg-accent-40 hover:text-white">
          {btnText}
        </button>
      </div>
    </Form>
  );
};

export default AddProject;
