import { CUSTOMERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const customersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => ({
        url: CUSTOMERS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getCustomerDetails: builder.query({
      query: (customerId) => ({
        url: `${CUSTOMERS_URL}/${customerId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetCustomersQuery, useGetCustomerDetailsQuery } =
  customersApiSlice;
