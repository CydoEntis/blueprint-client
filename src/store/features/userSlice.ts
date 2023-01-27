import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IRegisterUser } from "@/features/authentication/register/RegisterForm";
import axios from "axios";

const url = "http://localhost:8000/project";

export interface IUserState {
  user: IRegisterUser;
  token: string;
}

const initialState: IUserState = {
  user: {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  token: "",
};

export const createUser = createAsyncThunk(
  "user/create",
  async (user: IRegisterUser) => {
    try {
      const res = await axios.post(url + "/create", user);
      return res.data;
    } catch (error) {
      console.log(error);
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
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });

    // builder.addCase(getProjects.pending, (state) => {
    //   state.isLoading = true;
    // });
  },
});

export default UserSlice.reducer;
export const { addUser } = UserSlice.actions;
