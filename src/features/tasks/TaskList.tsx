import TaskCard from "./TaskCard";
import { Task } from "@/types/task-type";
import List from "@/components/shared/list/List";

type Props = {
  tasks: Task[];
};

const TaskList = ({ tasks }: Props) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </List>
  );
};

export default TaskList;
