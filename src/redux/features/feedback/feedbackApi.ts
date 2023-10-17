import { api } from "../../api/apiSlice";

const feedbackApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllFeedbacks: build.query({
      query: () => "/feedback",
      providesTags: ["feedback"],
    }),

    getSingleFeedback: build.query({
      query: (id: any) => `/feedback/${id}`,
      providesTags: ["feedback"],
    }),

    createFeedback: build.mutation({
      query: (data: any) => ({
        url: `/feedback/create-feedback`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["feedback"],
    }),

    deleteFeedback: build.mutation({
      query: (id: any) => ({
        url: `/feedback/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["feedback"],
    }),

    updateFeedback: build.mutation({
      query: ({ id, data }: any) => ({
        url: `/feedback/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["feedback"],
    }),
  }),
});

export const {
  useGetAllFeedbacksQuery,
  useGetSingleFeedbackQuery,
  useCreateFeedbackMutation,
  useDeleteFeedbackMutation,
  useUpdateFeedbackMutation,
} = feedbackApi;
