import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

// const url = "http://localhost:8000/task";
const url = "http://localhost:1337/jobs";

export interface IJob {
  _id?: string;
	position: string;
	company: string;
	location: string;
	jobType: "remote" | "part-time" | "full-time" | "internship" | "";
  jobStatus: string;
	interviewDate?: string,
  createdAt: string
  description: string
}

export interface IJobState {
  jobs: IJob[];
  isLoading: boolean;
}

const initialState: IJobState = {
  jobs: [],
  isLoading: false,
};

export const getJobs = createAsyncThunk("/all", async () => {
  try {
    const res = await axios(url + "/all");

    return res.data.jobs;
  } catch (error: any) {
    console.log(error);
  }
});

export const updateJob = createAsyncThunk("job/update", async (job: IJob) => {
  try {
    const res = await axios.put(url + `/update/${job._id}`, job);
    return res.data;
  } catch (error: any) {
    console.log(error);
  }
});

export const addNewJob = createAsyncThunk(
  "job/create",
  async (job: Omit<IJob, "_id">) => {
    try {
      const res = await axios.post(url + "/add", job);
      return res.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const deleteJob = createAsyncThunk("job/update", async (jobId: string) => {
  try {
    console.log("Is deleting");
    console.log(jobId)
    const res = await axios.delete(url + `/delete/${jobId}`);
    console.log(res.data)
    return res.data;
  } catch(error: any) {
    console.log(error)
  }
})

const JobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<IJob>) => {
      state.jobs.push(action.payload);
    },
    removeJob: (state, action: PayloadAction<string>) => {
      state.jobs = state.jobs.filter(job => job._id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getJobs.fulfilled, (state, action) => {
      state.jobs = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getJobs.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addNewJob.fulfilled, (state, action) => {
      state.jobs.push(action.payload);
    });
  },
});

export default JobSlice.reducer;
export const { addJob, removeJob } = JobSlice.actions;
