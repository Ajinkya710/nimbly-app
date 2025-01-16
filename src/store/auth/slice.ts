import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userLogIn, verifyToken } from "./action";
import { TLoginResponse, TUser } from "./types";

interface AuthSlice {
  user: TUser | null;
  isAuthenticated: boolean;
  token: string | null;
  error: string | null;
}

const initialState: AuthSlice = {
  user: null,
  isAuthenticated: false,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setErrorNull: (state) => {
      state.error = null;
    },
    logout(state) {
      localStorage.removeItem("authToken");
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogIn.fulfilled, (state, action: PayloadAction<TLoginResponse>) => {
        const { accessToken } = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        localStorage.setItem("authToken", accessToken);
      })
      .addCase(userLogIn.rejected, (state, action) => {
        state.error =
          action.type === "userLogIn/rejected"
            ? "Invalid Username/Password"
            : "Something went wrong";
      })
      .addCase(verifyToken.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.user = action.payload;
      })
      .addCase(verifyToken.rejected, (state, _) => {
        state.user = null;
        state.isAuthenticated = false;
        state.token = null;
      });
  },
});

export const { setErrorNull, logout } = authSlice.actions;

export default authSlice.reducer;
