import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
      reducerPath: 'cartApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'https://juice-hub-server.vercel.app' }),
      tagTypes: ["Carts"],
      endpoints: (builder) => ({
            addCart: builder.mutation({
                  query: (newItem) => ({
                        url: '/addCart',
                        method: 'POST',
                        body: newItem,
                  }),
                  invalidatesTags: ["Carts"]

            }),
            getCart: builder.query({
                  query: (email) => `/carts?email=${email}`,
                  providesTags: ["Carts"]
            }),
            removeCart: builder.mutation({
                  query: (id) => ({
                        url: `/deleteCart/${id}`,
                        method: "DELETE"
                  }),
                  invalidatesTags: ["Carts"]
            }),
            incrementCart: builder.mutation({
                  query: (id) => ({
                        url: `/incrementCart/${id}`,
                        method: "PATCH"
                  }),
                  invalidatesTags: ["Carts"]
            }),
            decrementCart: builder.mutation({
                  query: (id) => ({
                        url: `decrementCart/${id}`,
                        method: "PATCH"
                  }),
                  invalidatesTags: ["Carts"]
            }),
      }),
});

export const { useAddCartMutation, useGetCartQuery, useIncrementCartMutation, useDecrementCartMutation, useRemoveCartMutation, usePaymentMutation } = cartApi;