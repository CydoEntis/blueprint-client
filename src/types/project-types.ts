import { Colors } from "@/enums/colors-enum";
import { Task } from "./task-type";
import { User } from "./user-types";

export type Project = {
  id: number;
  color: Colors;
  title: string;
  team: string;
  dueDate: string;
  tasks: Task[];
  users: User[];
};
