import { createSlice } from "@reduxjs/toolkit";
import { cartProductSliceInitState } from "../../types";

const initialState: cartProductSliceInitState = {
  items: JSON.parse(localStorage.getItem("favoriteProducts") || "[]"),
};

export const favoriteProductsSlice = createSlice({
  name: "favoriteProducts",
  initialState,
  reducers: {
    toggleProduct: (state, { payload }) => {
      const findItem = state.items.find((item) => item.id === payload.id);

      if (findItem) {
        state.items = state.items.filter((item) => item.id !== findItem.id);
      } else {
        state.items.push(payload);
      }

      localStorage.setItem("favoriteProducts", JSON.stringify(state.items));
    },
  },
});

export const { toggleProduct } = favoriteProductsSlice.actions;

export default favoriteProductsSlice.reducer;
