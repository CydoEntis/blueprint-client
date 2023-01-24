import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const url = "http://localhost:8000/";

export interface IProject {
  projectId?: string;
  title: string;
  type: string;
  description: string;
  dueDate: Date;
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
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const createProject = createAsyncThunk(
  "project/create",
  async (project: IProject) => {
    console.log(project);
    try {
      const res = await axios.post(url + "project/create", project);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });

    builder.addCase(createProject.fulfilled, (state, action) => {
      state.projects.push(action.payload);
    });
  },
});

export default ProjectSlice.reducer;
export const { addProject, clearProjects } = ProjectSlice.actions;
