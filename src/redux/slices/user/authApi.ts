import { api } from "../../api/apiSlice";

const AUTH_URL = "/auth";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
