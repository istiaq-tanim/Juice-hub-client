import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
      reducerPath: 'productApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'https://juice-hub-server.vercel.app' }),
      tagTypes: ["Product"],
      endpoints: (builder) => ({
            getProduct: builder.query({
                  query: (productId) => `/juiceItem/${productId}`,
                  providesTags: (result, error, productId) => [{ type: 'Product', id: productId }],
            }),
            addReview: builder.mutation({
                  query: ({ productId, review }) => ({
                        url: '/addReview',
                        method: 'POST',
                        body: { productId, review },
                  }),
                  invalidatesTags: (result, error, { productId }) => [{ type: 'Product', id: productId }],
            }),
      }),
});

export const { useGetProductQuery, useAddReviewMutation } = productApi;
