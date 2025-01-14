import { createAsyncThunk } from "@reduxjs/toolkit";
import { $get, $post } from "../../http";
import { RootState } from "..";

export const userLogIn = createAsyncThunk<string, void, { state: RootState }>(
  "userLogIn",
  async (_, { getState }) => {
    const { username, password } = getState().login.loginFormData;

    return await $post("/auth/login", {
      username,
      password,
    });
  }
);

export const verifyToken = createAsyncThunk<string, void, { state: RootState }>(
  "verifyToken",
  async () => {
    return await $get("/auth/me");
  }
);
