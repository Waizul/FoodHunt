import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://foodhunt-s0ym.onrender.com/api" }),
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
    getOrders: builder.query({
      query: () => "/orders",
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getOrdersByUserID: builder.query({
      query: (userId) => `/orders/${userId}`,
    })
  }),
});

export const {
  useGetItemsQuery,
  useGetItemsByCategoryQuery,
  useGetItemByIDQuery,
  useGetItemsByNameQuery,
  useGetOrdersQuery,
  useGetUsersQuery,
  useGetOrdersByUserIDQuery
} = apiSlice;
