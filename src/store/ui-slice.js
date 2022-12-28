import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { cartVisible: false, alert: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.cartVisible = !state.cartVisible;
    },
    showAlert(state, action) {
      state.alert = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
