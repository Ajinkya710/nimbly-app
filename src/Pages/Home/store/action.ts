import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { $get } from "../../../http";

export const getToDoList = createAsyncThunk<string, void, { state: RootState }>(
    "getToDoList",
    async () => {
      return await $get("/todos");
    }
  );
  