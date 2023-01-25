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
