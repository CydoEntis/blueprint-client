import { Task } from "@/types/task-type";
import TaskList from "./TaskList";

type Props = {
  tasks: Task[];
};

const Tasks = ({ tasks }: Props) => {
  return (
    <section className="flex flex-col lg:flex-row lg:overflow-auto lg:pb-5">
      <TaskList tasks={tasks} />
    </section>
  );
};

export default Tasks;
