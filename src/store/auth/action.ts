import { createAsyncThunk } from "@reduxjs/toolkit";
import { $get, $post } from "../../http";
import { RootState } from "..";
import { TLoginResponse, TUser } from "./types";

export const userLogIn = createAsyncThunk<TLoginResponse, void, { state: RootState }>(
  "userLogIn",
  async (_, { getState }) => {
    const { username, password } = getState().login.loginFormData;

    return await $post("/auth/login", {
      username,
      password,
    });
  }
);

export const verifyToken = createAsyncThunk<TUser, void, { state: RootState }>(
  "verifyToken",
  async () => {
    return await $get("/auth/me");
  }
);
