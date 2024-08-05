import { configureStore } from "@reduxjs/toolkit";
import cartProductsSlice from "./slices/cartProductsSlice.ts";
import favoriteProductsSlice from "./slices/favoriteProductsSlice.ts";
import { apiSlice } from "./slices/apiSlice.ts";

const store = configureStore({
  reducer: {
    cartProducts: cartProductsSlice,
    favoriteProducts: favoriteProductsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
