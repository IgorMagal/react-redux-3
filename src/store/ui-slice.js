import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { cartVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
