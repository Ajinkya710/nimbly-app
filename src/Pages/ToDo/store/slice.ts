import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToDoList } from "./action";

interface ToDoSlice {
  todos: any;
  error: string | null;
  pagingMeta: {
    currentPage: number;
    totalItems: number;
  };
  isLoading: boolean;
}

const initialState: ToDoSlice = {
  todos: [],
  error: null,
  pagingMeta: {
    currentPage: 1,
    totalItems: 0,
  },
  isLoading: false,
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
      .addCase(getToDoList.pending, (state, action: any) => {
        state.isLoading = true;
      })
      .addCase(getToDoList.fulfilled, (state, action: any) => {
        state.todos = action.payload.todos;
        state.pagingMeta.totalItems = action.payload.total;
        state.isLoading = false;
      })
      .addCase(getToDoList.rejected, (state, _) => {
        state.error = "Failed to fetch todo list";
        state.isLoading = false;
      });
  },
});

export const { setPage } = toDoSlice.actions;

export default toDoSlice.reducer;
