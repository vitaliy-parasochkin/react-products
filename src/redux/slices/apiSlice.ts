import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://66ad338ab18f3614e3b4ae8d.mockapi.io/api/v1";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Accept", "plain/text, application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    get: builder.query({
      query: (name) => name,
    }),
  }),
});

export const { useGetQuery } = apiSlice;
