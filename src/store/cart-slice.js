import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart-data",
  initialState: {
    items: [],
    totalQty: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQty = action.payload.totalQty;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const oldItem = state.items.find(
        (item) => item.itemId === newItem.itemId
      );
      state.totalQty = state.totalQty + newItem.itemQty;
      state.changed = true;
      if (!oldItem) {
        state.items.push({
          itemId: newItem.itemId,
          itemName: newItem.itemName,
          itemPrice: newItem.itemPrice,
          itemQty: newItem.itemQty,
          totalPrice: newItem.itemQty * newItem.itemPrice,
        });
      } else {
        oldItem.itemQty = oldItem.itemQty + newItem.itemQty;
        oldItem.totalPrice = oldItem.itemQty * newItem.itemPrice;
      }
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const item = state.items.find((item) => item.itemId === itemId.itemId);

      state.totalQty--;
      state.changed = true;

      if (item.itemQty === 1) {
        state.items = state.items.filter(
          (item) => item.itemId !== itemId.itemId
        );
      } else {
        item.itemQty--;
        item.totalPrice = item.itemQty * item.itemPrice;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
