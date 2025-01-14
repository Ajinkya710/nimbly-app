import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import loginSlice from "../Pages/Login/store/slice";

const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
