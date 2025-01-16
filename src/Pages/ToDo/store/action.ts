import { createAsyncThunk } from "@reduxjs/toolkit";
import { $get } from "../../../http";
import { RootState } from "../../../store";
import { TToDoResponse } from "./types";

export const getToDoList = createAsyncThunk<
  TToDoResponse,
  void,
  { state: RootState }
>("todos/getToDoList", async (_, { getState }) => {
  const state = getState();
  const { pagingMeta } = state.toDo;
  const { currentPage } = pagingMeta;

  const skip = (currentPage - 1) * 10;
  const limit = 10;

  return await $get(`/todos?limit=${limit}&skip=${skip}`);
});
