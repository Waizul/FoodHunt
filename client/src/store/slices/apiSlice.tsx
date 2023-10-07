import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => `/items`,
    }),
    getItemsByCategory: builder.query({
      query: (categoryName) => `/items/category?category=${categoryName}`,
    }),
    getItemsByName: builder.query({
      query: (itemName) => `/items/name?name=${itemName}`,
    }),
    getItemByID: builder.query({
      query: (itemId) => `/items/${itemId}`,
    }),
    
  }),
});

export const {
  useGetItemsQuery,
  useGetItemsByCategoryQuery,
  useGetItemByIDQuery,
  useGetItemsByNameQuery
} = apiSlice;
