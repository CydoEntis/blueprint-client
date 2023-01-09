import { User } from "./user-types";

export type Task = {
  projectId: number;
  id: number;
  tag: string;
  title: string;
  description: string;
  users: User[];
  progress: number;
  comments: string[];
};
