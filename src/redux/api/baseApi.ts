import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base API configuration
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["Book", "BorrowedBook"],
  endpoints: () => ({}),
});

export default baseApi;
