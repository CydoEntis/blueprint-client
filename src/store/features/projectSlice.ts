import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const url = "http://localhost:8000/";

export interface IProject {
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

export interface IProjectState {
  projects: IProject[];
}

const initialState: IProjectState = {
  projects: [],
};

export const getProjects = createAsyncThunk("project/get", async () => {
  try {
    const res = await axios(url + "project/get");
  } catch (error) {
    console.log(error);
  }
});

const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<IProject>) => {
      state.projects.push(action.payload);
    },
    clearProjects: (state) => {
      state.projects = [];
    },
  },
  extraReducers: {
    // [getProjects.pending]: (state: any) => {
    //   state.isLoading = true;
    // },
  },
});

export default ProjectSlice.reducer;
export const { addProject, clearProjects } = ProjectSlice.actions;
