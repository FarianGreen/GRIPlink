import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  toggleCard: false,
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    toggleCard: (state) => {
      state.toggleCard = !state.toggleCard;
    },
  },
});

export const { toggleCard } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
