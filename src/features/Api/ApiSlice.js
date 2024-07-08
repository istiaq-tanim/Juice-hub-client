import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
      reducerPath: "cartApi",
      baseQuery: fetchBaseQuery({ baseUrl: "https://juice-hub-server.vercel.app" }),
      tagTypes: ["Carts"],
      endpoints: () => ({})

})