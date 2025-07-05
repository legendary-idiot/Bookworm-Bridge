import type {
  Book,
  BorrowBookResponse,
  CreateBorrowBookRequest,
} from "@/interface/BookInterface";
import { baseApi } from "./baseApi";

export const borrowBookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBorrowedBooks: builder.query<BorrowBookResponse[], void>({
      query: () => "/borrow",
      transformResponse: (response: {
        success: boolean;
        message: string;
        data: BorrowBookResponse[];
      }) => response.data,
      providesTags: ["BorrowedBook"],
    }),
    createBorrowBook: builder.mutation<Partial<Book>, CreateBorrowBookRequest>({
      query: (book) => ({
        url: "/borrow",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["BorrowedBook", "Book"],
    }),
  }),
});

export const { useGetBorrowedBooksQuery, useCreateBorrowBookMutation } =
  borrowBookApi;
