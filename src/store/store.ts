import { TypedUseSelectorHook } from "react-redux/es/types";
import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/projectSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
