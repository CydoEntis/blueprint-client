import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

// const url = "http://localhost:8000/task";
const url = `${import.meta.env.VITE_ENDPOINT}/jobs`;



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

export interface ISearchOptions {
  search: string;
  jobStatus: "all" | "interview" | "declined" | "pending";
  jobType: "all" | "full-time" | "part-time" | "interview";
  sort: "newest" | "oldest" | "a-z" | "z-a";
}

export interface IJobState {
  jobs: IJob[];
  pending: number;
  interview: number;
  declined: number;
  isLoading: boolean;
  errorMsg: string;
  numOfPages: number;
  totalJobs: number;
  searchOptions: ISearchOptions;
  page: number;
}

const initialState: IJobState = {
  jobs: [],
  pending: 0,
  interview: 0,
  declined: 0,
  isLoading: false,
  errorMsg: "",
  numOfPages: 0,
  totalJobs: 0,
  searchOptions: {
    search: "",
    jobStatus: "all",
    jobType: "all",
    sort: "newest",
  },
  page: 1
};

export interface IOptions extends ISearchOptions {
  page?: number;
}

export const getJobs = createAsyncThunk("/all", async (options: IOptions = {
  search: "",
  jobStatus: "all",
  jobType: "all",
  sort: "newest",
  page: 1
}) => {

  const {search, jobStatus, jobType, sort, page} = options;
  try {
    const res = await axios(url + `/all?&page=${page}&search=${search}&jobStatus=${jobStatus}&jobType=${jobType}&sort=${sort}`);
    return res.data;
  } catch (error: any) {
    console.log(error);
  }
});

export const updateJob = createAsyncThunk("job/update", async (job: IJob) => {
  try {
    const res = await axios.put(url + `/update/${job._id}`, job);
    return res.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
});

export const addNewJob = createAsyncThunk(
  "job/add",
  async (job: Omit<IJob, "_id">) => {
    try {
      const res = await axios.post(url + "/add", job);
      return res.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
);

export const deleteJob = createAsyncThunk("job/update", async (jobId: string) => {
  try {
    const res = await axios.delete(url + `/delete/${jobId}`);
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
    },
    setGlobalSearchOptions: (state, action: PayloadAction<ISearchOptions>) => {
      state.searchOptions = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getJobs.fulfilled, (state, action) => {
      state.jobs = action.payload.jobs;
      state.pending = action.payload.pending;
      state.interview = action.payload.interview;
      state.declined = action.payload.declined;
      state.numOfPages = action.payload.numOfPages;
      state.totalJobs = action.payload.totalJobs;
      state.isLoading = false;
    });

    builder.addCase(getJobs.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addNewJob.fulfilled, (state, action) => {
      state.jobs.push(action.payload);
    });

    builder.addCase(addNewJob.rejected, (state, action) => {
      state.errorMsg = action.error.message || "";
    })
  },
});

export default JobSlice.reducer;
export const { addJob, removeJob, setGlobalSearchOptions, setPage } = JobSlice.actions;
