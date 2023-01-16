import Button from "@/components/buttons/Button";
import FormControl from "@/components/form/FormControl";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import TextArea from "@/components/form/TextArea";
import { useState } from "react";
import Form from "../../components/form/Form";
import Modal from "../../components/modal/Modal";
import SubTasks from "./SubTasks";

type Props = {
  onClose: () => void;
};

let taskList = [
  {
    id: "1",
    description: "Some kind of task",
    completed: false,
  },
  {
    id: "2",
    description: "A completed task",
    completed: true,
  },
  {
    id: "3",
    description: "Get this shit done",
    completed: false,
  },
];

const AddTask = ({ onClose }: Props) => {
  const [tasks, setTasks] = useState(taskList);
  const [subtask, setSubtask] = useState<string>("");

  // console.log(tasks);

  const deleteTaskHandler = (id: string) => {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    console.log(tasks);
  };

  const completeTaskHandler = (id: string) => {
    let index = tasks.findIndex((task) => task.id === id);
    let updatedTasks = [...tasks];
    let updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const addSubTaskHandler = () => {
    console.log("Clicked subtask");
    const newSubTask = {
      id: Math.floor(Math.random() * (10000 - 0 + 1) + 1).toString(),
      description: subtask,
      completed: false,
    };

    tasks.push(newSubTask);
    setTasks(tasks);
    console.log(tasks);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form reload");
    e.preventDefault();
  };
  return (
    <Modal onClose={onClose}>
      <Form onSubmit={handleSubmit}>
        <h1 className="mb-5 text-2xl text-grey-30">New Task</h1>
        <FormControl className="flex-col">
          <Label htmlFor="title">Title</Label>
          <Input id="title" type="text" />
        </FormControl>
        <FormControl className="flex-col">
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" numCols={10} numRows={3} />
        </FormControl>
        <FormControl className="flex-col">
          <SubTasks
            className="h-40 overflow-y-auto"
            tasks={tasks}
            deleteTaskHandler={deleteTaskHandler}
            completeTaskHandler={completeTaskHandler}
          />
          <div className="flex w-1/2 items-center">
            <Input
              id="new-task"
              type="text"
              className="mr-2"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSubtask(e.target.value)
              }
            />
            <Button
              className="w-48  border-accent-30 bg-accent-10 py-2 px-5 text-accent-40 hover:bg-accent-40 hover:text-white"
              type="button"
              onClick={addSubTaskHandler}
            >
              Add Sub Task
            </Button>
          </div>
        </FormControl>
        <FormControl className="flex-col lg:w-1/4">
          <Label htmlFor="users">Assigned Users</Label>
          <select multiple id="users">
            <option>Joe</option>
            <option>Jane</option>
            <option>Jack</option>
          </select>
        </FormControl>
        <FormControl className="flex-col lg:w-1/4">
          <Label htmlFor="date">Due Date</Label>
          <Input id="date" type="date" />
        </FormControl>
        <FormControl className="w-1/2">
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

export default AddTask;
