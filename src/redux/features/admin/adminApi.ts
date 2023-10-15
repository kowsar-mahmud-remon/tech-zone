import { api } from "../../api/apiSlice";

const adminApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllAdmins: build.query({
      query: () => "/admin",
      providesTags: ["admin"],
    }),

    createAdmin: build.mutation({
      query: (data: any) => ({
        url: `/admin/create-admin`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["admin"],
    }),

    deleteAdmin: build.mutation({
      query: (id: any) => ({
        url: `/auth/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["admin"],
    }),
  }),
});

export const {
  useGetAllAdminsQuery,
  useCreateAdminMutation,
  useDeleteAdminMutation,
} = adminApi;
