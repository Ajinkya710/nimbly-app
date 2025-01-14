import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from "./auth/slice";
import loginSlice from "../Pages/Login/store/slice";
import homeSlice from "../Pages/Home/store/slice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    auth: authSlice,
    home: homeSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
