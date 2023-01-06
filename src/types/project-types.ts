import { Colors } from "@/enums/colors-enum";
import { User } from "./user-types";

export type Project = {
  color: Colors;
  title: string;
  team: string;
  dueDate: string;
  users: User[];
};
