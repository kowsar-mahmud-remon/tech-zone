import { api } from "../../api/apiSlice";

const adminApi = api.injectEndpoints({
  endpoints: (build) => ({
    createAdmin: build.mutation({
      query: (data) => ({
        url: `/admin/create-admin`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["admin"],
    }),
  }),
});

export const { useCreateAdminMutation } = adminApi;
