import TaskCard from "./TaskCard";
import { Task } from "@/types/task-type";
import List from "@/components/list/List";

type Props = {
  tasks: Task[];
};

const TaskList = ({ tasks }: Props) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TaskList;
