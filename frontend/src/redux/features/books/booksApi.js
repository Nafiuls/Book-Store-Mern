import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../../../utils/baseURL";
const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseURL()}/api/books`,
  credentials: "include",
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      Headers.set("Authorization", `Bearer ${token}`);
    }
    return Headers;
  },
});

const booksApi = createApi({
  reducerPath: "bookApi",
  baseQuery,
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    // fetch all books
    fetchAllBooks: builder.query({
      query: () => "/get-books",
      providesTags: ["Books"],
    }),
    // fetch singgle book by id
    fetchBookById: builder.query({
      query: (id) => `/single-book/${id}`,
      providesTags: (result, error, id) => [{ type: "Books", id }],
    }),
    // add a book
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "/add-book",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),
    // update a book
    updateBook: builder.mutation({
      query: (id, ...rest) => ({
        url: `/edit-book/${id}`,
        method: "PUT",
        body: rest,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Books"],
    }),
    // delete a book
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/delete-book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useFetchAllBooksQuery,
  useFetchBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
export default booksApi;
