import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TRegisterType, registerNewUser } from "../api/api-constants";

export const sendRegisterData = createAsyncThunk(
  "sendRegisterData",
  async function (registerData: TRegisterType, { rejectWithValue }) {
    const response = await registerNewUser(registerData);
    if (!response.ok) {
      return rejectWithValue(await response.json());
    }
    const data = (await response.json()) as TRegisterType;

    return data;
  }
);

const initialState = {
  error: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendRegisterData.fulfilled, (state, action) => {
        state.error = action.payload.email ? "Ok" : "Invalid";
      })
      .addCase(sendRegisterData.rejected, (state, action: any) => { //!!!!ANY?
        state.error = action.payload[0].msg;
      });
  },
});

export const registerReducer = registerSlice.reducer;
