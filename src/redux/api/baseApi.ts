import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base API configuration
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-rafee.vercel.app/api",
  }),
  tagTypes: ["Book", "BorrowedBook"],
  endpoints: () => ({}),
});

export default baseApi;
