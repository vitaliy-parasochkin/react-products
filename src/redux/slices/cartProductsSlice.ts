import { createSlice } from "@reduxjs/toolkit";
import { cartProductSliceInitState } from "../../types";

const initialState: cartProductSliceInitState = {
  items: JSON.parse(localStorage.getItem("cartProducts") || "[]"),
};

export const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addCartProduct: (state, { payload }) => {
      state.items.push({ ...payload, count: 1 });

      localStorage.setItem("cartProducts", JSON.stringify(state.items));
    },
    deleteCartProduct: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);

      localStorage.setItem("cartProducts", JSON.stringify(state.items));
    },
    editCartProduct: (state, { payload }) => {
      const product = state.items.find((item) => item.id === payload.id);

      if (product) {
        product.count = payload.count;
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.items));
    },
  },
});

export const { addCartProduct, editCartProduct, deleteCartProduct } =
  cartProductsSlice.actions;

export default cartProductsSlice.reducer;
