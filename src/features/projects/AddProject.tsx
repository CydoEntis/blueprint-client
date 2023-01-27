import React, { useState } from "react";

import Button from "@/components/buttons/Button";
import Form from "@/components/form/Form";
import FormControl from "@/components/form/FormControl";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Modal from "@/components/modal/Modal";
import TextArea from "@/components/form/TextArea";
import { createProject } from "@/store/features/projectSlice";
import { useAppDispatch } from "@/store/store";

type Props = {
  onClose: () => void;
};

const AddProject = ({ onClose }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [users, setUsers] = useState<string[]>([]);
  const [date, setDate] = useState<string>("");
  const dispatch = useAppDispatch();

  function addProjectHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      createProject({
        title,
        type: "Test",
        description,
        dueDate: new Date("2023-03-22"),
        users,
        createdBy: "Some user",
      })
    );
  }

  return (
    <Modal onClose={onClose}>
      <Form onSubmit={addProjectHandler}>
        <h1 className="mb-5 text-2xl text-grey-30">New Project</h1>
        <FormControl className="flex-col">
          <Label htmlFor="title">Text</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl className="flex-col">
          <Label htmlFor="description">Description</Label>
          <TextArea
            className="bg-off-white"
            id="description"
            numCols={20}
            numRows={10}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl className="flex-col lg:w-1/4">
          <Label htmlFor="users">Assigned Users</Label>
          <select
            multiple
            id="users"
            onChange={(e) => {
              let values = Array.from(
                e.target.selectedOptions,
                (option) => option.value
              );
              setUsers(values);
            }}
          >
            <option>Joe</option>
            <option>Jane</option>
            <option>Jack</option>
          </select>
        </FormControl>
        <FormControl className="flex-col lg:w-1/4">
          <Label htmlFor="date">Due Date</Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
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
