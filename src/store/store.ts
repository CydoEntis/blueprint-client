import { TypedUseSelectorHook } from "react-redux/es/types";
import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./features/jobSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    job: jobReducer,
    user: userReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
