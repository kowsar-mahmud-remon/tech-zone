import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => "/auth",
      providesTags: ["user"],
    }),

    getSingleUser: build.query({
      query: (id: any) => `/auth/${id}`,
      providesTags: ["user"],
    }),

    createUser: build.mutation({
      query: (data: any) => ({
        url: `/auth/create-user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),

    deleteUser: build.mutation({
      query: (id: any) => ({
        url: `/auth/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["user"],
    }),

    updateUser: build.mutation({
      query: ({ id, data }: any) => ({
        url: `/auth/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApi;
