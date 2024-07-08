import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewApi = createApi({
      reducerPath: 'reviewApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'https://juice-hub-server.vercel.app' }),
      tagTypes: ["Product"],
      endpoints: (builder) => ({
            addReview: builder.mutation({
                  query: ({ productId, review }) => ({
                        url: '/addReview',
                        method: 'POST',
                        body: { productId, review },
                  }),
                  invalidatesTags: (result, error, { productId }) => [{ type: 'Product', id: productId }],

            })
      })
});

export const { useAddReviewMutation } = reviewApi;