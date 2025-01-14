import { createAsyncThunk } from "@reduxjs/toolkit";
import { $post } from "../../../api";
import { RootState } from "../../../store";

export const userLogIn = createAsyncThunk<string, void, { state: RootState }>(
  "userLogIn",
  async (_, { getState }) => {
    const { username, password } = getState().login.loginFormData;

    const response = await $post("/auth/login", {
      username,
      password,
    });

    return response.data.token;
  }
);
