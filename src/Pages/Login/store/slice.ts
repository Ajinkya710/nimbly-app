import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginFormData, User } from "./types";
import { userLogIn } from "./action";

interface LoginSlice {
  loginFormData: LoginFormData;
  userData: User | null;
}

const initialState: LoginSlice = {
  loginFormData: {
    username: "",
    password: "",
  },
  userData: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setFormFields: (
      state,
      action: PayloadAction<{ field: keyof LoginFormData; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.loginFormData[field] = value;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(userLogIn.fulfilled, (state, action: any) => {
      state.userData = action.payload;
    })
    .addCase(userLogIn.rejected, (state, _) => {
      state.userData = null;
    })
  },
});

export const { setFormFields } = loginSlice.actions;

export default loginSlice.reducer;
