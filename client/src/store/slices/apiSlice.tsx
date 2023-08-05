import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => `/items`,
    }),
  }),
});

export const { useGetItemsQuery } = apiSlice;
