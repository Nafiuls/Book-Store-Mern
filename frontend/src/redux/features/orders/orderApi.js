import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../../../utils/baseURL";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseURL()}/api/orders`,
  credentials: "include",
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      Headers.set("Authorization", `Bearer ${token}`);
    }
    return Headers;
  },
});

const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery,
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    // place order api
    placeOrder: builder.mutation({
      query: (order) => ({
        url: "/create-order",
        method: "POST",
        body: order,
      }),
    }),

    // get orders by user email
    getOrderByEmail: builder.query({
      query: (email) => ({
        url: `/get-order/${email}`,
      }),
      providesTags: ["Orders"],
    }),
  }),
});

export const { usePlaceOrderMutation, useGetOrderByEmailQuery } = orderApi;

export default orderApi;
