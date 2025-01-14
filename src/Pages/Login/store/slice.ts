import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginFormData } from "../../../store/auth/types";

interface LoginSlice {
  loginFormData: LoginFormData;
}

const initialState: LoginSlice = {
  loginFormData: {
    username: "",
    password: "",
  },
};

const loginSlice = createSlice({
  name: "auth",
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
});

export const { setFormFields } = loginSlice.actions;

export default loginSlice.reducer;
