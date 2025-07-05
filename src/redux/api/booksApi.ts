import type {
  Book,
  CreateBookRequest,
  UpdateBookRequest,
} from "@/interface/BookInterface";
import { baseApi } from "./baseApi";

// Create the books API slice
export const booksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all books
    getBooks: builder.query<Book[], void>({
      query: () => "/books",
      transformResponse: (response: {
        success: boolean;
        message: string;
        data: Book[];
      }) => response.data,
      providesTags: ["Book"],
    }),

    // Get a single book by ID
    getBookById: builder.query<Book, string>({
      query: (id) => `/books/${id}`,
      transformResponse: (response: {
        success: boolean;
        message: string;
        data: Book;
      }) => response.data,
      providesTags: ["Book"],
    }),

    // Create a new book
    createBook: builder.mutation<Book, CreateBookRequest>({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Book"],
    }),

    // Update an existing book
    updateBook: builder.mutation<Book, UpdateBookRequest>({
      query: ({ _id, ...updateData }) => ({
        url: `/books/${_id}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["Book"],
    }),

    // Delete a book
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});

// Export all the hooks
export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
