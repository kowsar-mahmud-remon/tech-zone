import { api } from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/auth/login`,
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
