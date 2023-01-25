import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const url = "http://localhost:8000/task";

export interface ITask {
  _id?: string;
  projectId: string;
  title: string;
  type: string;
  description: string;
  subTasks: string[];
  dueDate: Date;
  comments: string[];
  users: string[];
  createdBy: string;
}

export interface ITaskState {
  tasks: ITask[];
  isLoading: boolean;
}

const initialState: ITaskState = {
  tasks: [],
  isLoading: false,
};

export const getTasks = createAsyncThunk("task/get", async () => {
  try {
    const res = await axios(url + "/get");
    return res.data;
  } catch (error: any) {
    console.log(error);
  }
});

export const createTask = createAsyncThunk(
  "task/create",
  async (task: ITask) => {
    try {
      const res = await axios.post(url + "/create", task);
      return res.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);
