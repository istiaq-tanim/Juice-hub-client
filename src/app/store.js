import { configureStore } from "@reduxjs/toolkit";
import { cartApi } from "../features/cart/cartApi";
import { productApi } from "../features/proudcts/productsApi";
import { userApi } from "../features/user/userApi";
export const store = configureStore({
      reducer: {
            [cartApi.reducerPath]: cartApi.reducer,
            [productApi.reducerPath]: productApi.reducer,
            [userApi.reducerPath]: userApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                  .concat(cartApi.middleware)
                  .concat(productApi.middleware)
                  .concat(userApi.middleware)
})