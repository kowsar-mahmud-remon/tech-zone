import { api } from "../../api/apiSlice";

const serviceApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllServices: build.query({
      query: () => "/service",
      providesTags: ["service"],
    }),

    getSingleService: build.query({
      query: (id: any) => `/service/${id}`,
      providesTags: ["service"],
    }),

    createService: build.mutation({
      query: (data: any) => ({
        url: `/service/create-service`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["service"],
    }),

    deleteService: build.mutation({
      query: (id: any) => ({
        url: `/service/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["service"],
    }),

    updateService: build.mutation({
      query: ({ id, data }: any) => ({
        url: `/service/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
  useCreateServiceMutation,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} = serviceApi;
