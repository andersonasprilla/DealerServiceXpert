import { CUSTOMERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const customersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyCustomers: builder.query({
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
    createCustomer: builder.mutation({
      query: (newCustomerData) => ({
        url: CUSTOMERS_URL,
        method: "POST",
        body: newCustomerData, // Include the user input data here
      }),
      invalidatesTags: ["Customer"],
    }),
    deleteCustomer: builder.mutation({
      query: (customerId) => ({
        url: `${CUSTOMERS_URL}/${customerId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetMyCustomersQuery,
  useGetCustomerDetailsQuery,
  useCreateCustomerMutation,
  useDeleteCustomerMutation,
} = customersApiSlice;
