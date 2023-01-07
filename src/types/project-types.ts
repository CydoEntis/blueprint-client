import { Colors } from "@/enums/colors-enum";
import { Task } from "./task-type";
import { User } from "./user-types";

export interface ProjectProps {
  id: number;
  color: string;
  title: string;
  team: string;
  dueDate: string;
  tasks: Task[];
  users: User[];
}
