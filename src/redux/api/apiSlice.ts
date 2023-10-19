import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tech-zone-server-iota.vercel.app/api/v1",
  }),
  tagTypes: [
    "user",
    "admin",
    "service",
    "review",
    "feedback",
    "booking",
    "blog",
  ],
  endpoints: () => ({}),
});
