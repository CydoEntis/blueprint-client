import { User } from "./user-types";

export type Task = {
  id: number;
  title: string;
  description: string;
  users: User[];
  progress: number;
  comments: string[];
};
