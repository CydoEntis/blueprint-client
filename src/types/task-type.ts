import { User } from "./user-types";

export type Task = {
  id: number;
  tag: string;
  title: string;
  description: string;
  users: User[];
  progress: number;
  comments: string[];
};
