import { createAsyncThunk } from "@reduxjs/toolkit";
import { $get } from "../../../http";
import { RootState } from "../../../store";

interface TodoResponse {
  todos: any[];
  total: number;
}

export const getToDoList = createAsyncThunk<TodoResponse, void, { state: RootState }>(
  "todos/getToDoList",
  async () => {
    const response = await $get('/todos?limit=10&skip=0');
    const todos = response.data;
    const total = response.headers["x-total-count"] || 0;

    console.log(todos, total);
    return { todos, total };
  }
);
