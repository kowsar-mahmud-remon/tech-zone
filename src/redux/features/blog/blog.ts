import { api } from "../../api/apiSlice";

const blogApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllBlogs: build.query({
      query: () => "/blog",
      providesTags: ["blog"],
    }),

    getSingleBlog: build.query({
      query: (id: any) => `/blog/${id}`,
      providesTags: ["blog"],
    }),

    createBlog: build.mutation({
      query: (data: any) => ({
        url: `/blog/create-blog`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),

    deleteBlog: build.mutation({
      query: (id: any) => ({
        url: `/blog/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["blog"],
    }),

    updateBlog: build.mutation({
      query: ({ id, data }: any) => ({
        url: `/blog/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} = blogApi;
