import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

// const url = "http://localhost:8000/project";
const url = "http://localhost:1337/project";

export interface IProject {
  _id?: string;
  title: string;
  type: string;
  description: string;
  dueDate: Date;
  users: string[];
  createdBy: string;
}

export interface IProjectState {
  projects: IProject[];
  isLoading: boolean;
}

const initialState: IProjectState = {
  projects: [],
  isLoading: false,
};

export const getProjects = createAsyncThunk("project/get", async () => {
  try {
    const res = await axios(url + "/get");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const createProject = createAsyncThunk(
  "project/create",
  async (project: IProject) => {
    try {
      const res = await axios.post(url + "/create", project);
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
      state.isLoading = false;
    });

    builder.addCase(getProjects.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createProject.fulfilled, (state, action) => {
      state.projects.push(action.payload);
    });
  },
});

export default ProjectSlice.reducer;
export const { addProject, clearProjects } = ProjectSlice.actions;
