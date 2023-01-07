import { User } from "./user-types";

export type Task = {
  title: string;
  description: string;
  users: User[];
  progress: number;
  comments: string[];
};
