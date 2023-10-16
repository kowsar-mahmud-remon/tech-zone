import { api } from "../../api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllReviews: build.query({
      query: () => "/review",
      providesTags: ["review"],
    }),

    getSingleReview: build.query({
      query: (id: any) => `/review/${id}`,
      providesTags: ["review"],
    }),

    createReview: build.mutation({
      query: (data: any) => ({
        url: `/review/create-review`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),

    deleteReview: build.mutation({
      query: (id: any) => ({
        url: `/review/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["review"],
    }),

    updateReview: build.mutation({
      query: ({ id, data }: any) => ({
        url: `/review/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
  useGetSingleReviewQuery,
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} = reviewApi;
