import { api } from "../../api/apiSlice";

const bookingApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllBookings: build.query({
      query: () => "/booking",
      providesTags: ["booking"],
    }),

    getSingleBooking: build.query({
      query: (id: any) => `/booking/${id}`,
      providesTags: ["booking"],
    }),

    createBooking: build.mutation({
      query: (data: any) => ({
        url: `/booking/create-booking`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),

    deleteBooking: build.mutation({
      query: (id: any) => ({
        url: `/booking/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["booking"],
    }),

    updateBooking: build.mutation({
      query: ({ id, data }: any) => ({
        url: `/booking/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useGetSingleBookingQuery,
  useCreateBookingMutation,
  useDeleteBookingMutation,
  useUpdateBookingMutation,
} = bookingApi;
