import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToDoList } from "./action";

interface ToDoSlice {
  todos: any;
  error: string | null;
  pagingMeta: {
    currentPage: number;
    totalItems: number;
  };
}

const initialState: ToDoSlice = {
  todos: [],
  error: null,
  pagingMeta: {
    currentPage: 1,
    totalItems: 0,
  },
};

const toDoSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPage(state, action) {
      state.pagingMeta.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getToDoList.fulfilled, (state, action: any) => {
        state.todos = action.payload.todos;
        state.pagingMeta.totalItems = action.payload.total;
      })
      .addCase(getToDoList.rejected, (state, _) => {
        state.error = "Failed to fetch todo list";
      });
  },
});

export const { setPage } = toDoSlice.actions;

export default toDoSlice.reducer;
