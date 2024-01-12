import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TloginType, loginUser } from "../api/api-constants";

export const sendLoginData = createAsyncThunk(
  "sendLoginData",
  async function (loginData: TloginType, { rejectWithValue }) {
    const response = await loginUser(loginData);
    if (!response.ok) {
      return rejectWithValue(await response.json());
    }
    const data = (await response.json()) as TloginType;

    return data;
  }
);

const initialState = {
  isLogined: Boolean(localStorage.getItem("user")),
  error: "",
  autorizadedUser: localStorage.getItem("user"),
  data: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendLoginData.fulfilled, (state, action) => {
        state.error = "Вход выполнен успешно";
        const { email } = action.payload;
        localStorage.setItem("user", JSON.stringify({ email }));
        state.isLogined = true;
      })
      .addCase(sendLoginData.rejected, (state) => {
        state.error = "Неверный логин или пароль";
      });
  },
});

export const loginReducer = loginSlice.reducer;
