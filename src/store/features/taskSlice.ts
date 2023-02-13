import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

// const url = "http://localhost:8000/task";
const url = "http://localhost:1337/task";

export interface ITask {
  _id: string;
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
  async (task: Omit<ITask, "_id">) => {
    try {
      const res = await axios.post(url + "/create", task);
      return res.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getTasks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createTask.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
    });
  },
});

export default TaskSlice.reducer;
export const { addTask } = TaskSlice.actions;
