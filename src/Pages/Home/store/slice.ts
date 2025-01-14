import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToDoList } from "./action";

interface HomeSlice {
  todos: any;
  error: string | null;
}

const initialState: HomeSlice = {
  todos: [],
  error: null,
};

const homeSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getToDoList.fulfilled, (state, action: any) => {
        state.todos = action.payload;
        state.error = null;
      })
      .addCase(getToDoList.rejected, (state, action) => {
        state.todos = null;
        state.error = "Failed to fetch todo list"
      });
  },
});

// export const { setFormFields } = homeSlice.actions;

export default homeSlice.reducer;
