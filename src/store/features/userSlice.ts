import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IRegisterUser } from "@/features/authentication/register/RegisterForm";
import axios from "axios";

// const url = "http://localhost:8000/user";
const url = "http://localhost:1337/user";

export interface IUser {
  email: string;
  username: string;
  password: string;
}

interface IUserState {
  user: IUser;
  token: string;
  errorMsg: string;
}

const initialState: IUserState = {
  user: {
    email: "",
    username: "",
    password: "",
  },
  token: "",
  errorMsg: "",
};

export const createUser = createAsyncThunk(
  "user/create",
  async (user: IRegisterUser) => {
    try {
      console.log(user);
      const res = await axios.post(url + "/create", user);
      return res.data;
    } catch (error) {}
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (user: Omit<IUser, "username">) => {
    try {
      const res = await axios.post(url + "/login", user);
      return res.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUserState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearError: (state) => {
      state.errorMsg = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.errorMsg = action.error.message || "";
    });
  },
});

export default UserSlice.reducer;
export const { addUser, clearError } = UserSlice.actions;
