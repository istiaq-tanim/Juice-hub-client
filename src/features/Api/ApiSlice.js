import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
      reducerPath: "cartApi",
      baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
      tagTypes: ["Carts"],
      endpoints: () => ({})

})