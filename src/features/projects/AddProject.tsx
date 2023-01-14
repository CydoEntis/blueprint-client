import Button from "@/components/buttons/Button";
import Form from "@/components/form/Form";
import FormControl from "@/components/form/FormControl";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import TextArea from "@/components/form/TextArea";
import Modal from "@/components/modal/Modal";
import React from "react";

type Props = {
  onClose: () => void;
};

const AddProject = ({ onClose }: Props) => {
  return (
    <Modal onClose={onClose}>
      <Form onSubmit={() => console.log("Submit")}>
        <h1 className="mb-5 text-2xl text-grey-30">New Project</h1>
        <FormControl className="flex-col">
          <Label htmlFor="title">Text</Label>
          <Input id="title" type="text" />
        </FormControl>
        <FormControl className="flex-col">
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" numCols={20} numRows={10} />
        </FormControl>
        <FormControl className="w-1/4 flex-col">
          <Label htmlFor="users">Assigned Users</Label>
          <select multiple id="users">
            <option>Joe</option>
            <option>Jane</option>
            <option>Jack</option>
          </select>
        </FormControl>
        <FormControl className="w-1/4 flex-col">
          <Label htmlFor="date">Due Date</Label>
          <Input id="date" type="date" />
        </FormControl>
        <FormControl>
          <Button
            type="submit"
            className="mr-2  w-48 border-accent-30 bg-accent-10 py-2 px-5 text-accent-40 hover:bg-accent-40 hover:text-white"
          >
            Add
          </Button>
          <Button
            type="button"
            className="w-48  border-red-40 bg-red-100 py-2 px-5 text-red-40 hover:bg-red-40 hover:text-white"
          >
            Cancel
          </Button>
        </FormControl>
      </Form>
    </Modal>
  );
};

export default AddProject;
