import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
      reducerPath: 'userApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'https://juice-hub-server.vercel.app' }),
      tagTypes: ["User"],
      endpoints: (builder) => ({
            getUser: builder.query({
                  query: (email) => `/user?email=${email}`,
                  providesTags: (result, error, email) => [{ type: 'User', id: email }],
            }),
            addUser: builder.mutation({
                  query: ({ email, user }) => ({
                        url: '/updateUser',
                        method: 'PUT',
                        body: { email, user },
                  }),
                  invalidatesTags: (result, error, { email }) => [{ type: 'User', id: email }],
            }),
      }),
});

export const { useGetUserQuery, useAddUserMutation } = userApi;