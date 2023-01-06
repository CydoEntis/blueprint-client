import { User } from "./user-types";

export type Task = {
  title: string;
  description: string;
  members: User[];
  progress: number;
  comments: string[];
};
