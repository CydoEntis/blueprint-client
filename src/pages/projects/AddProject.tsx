import Form from "@/components/shared/form/Form";
import FormBtn from "@/components/shared/form/FormBtn";
import React from "react";

type Props = {};

const AddProject = (props: Props) => {
  return (
    <Form onSubmit={() => console.log("Submitted")}>
      <h1 className="mb-5 text-2xl text-grey-30">New Project</h1>
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
        <FormBtn type="submit" text="Add Project" />
      </div>
    </Form>
  );
};

export default AddProject;
