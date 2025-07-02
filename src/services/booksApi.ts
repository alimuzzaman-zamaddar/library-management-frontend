import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BookData } from "../Pages/Home/AddBook";

// Type for each item in the borrow summary
interface BorrowSummaryItem {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

// Full API response type
interface BorrowSummaryResponse {
  success: boolean;
  message: string;
  data: BorrowSummaryItem[];
}

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: builder => ({
    getBooks: builder.query({
      query: () => "books",
    }),
    getBook: builder.query<
      { success: boolean; message: string; data: BookData },
      string
    >({
      query: id => `books/${id}`,
    }),
    addBook: builder.mutation({
      query: newBook => ({
        url: "books",
        method: "POST",
        body: newBook,
      }),
    }),
    updateBook: builder.mutation({
      query: updatedBook => ({
        url: `books/${updatedBook.id}`,
        method: "PATCH",
        body: updatedBook,
      }),
    }),
    deleteBook: builder.mutation<{ success: boolean; message: string }, string>(
      {
        query: bookId => ({
          url: `books/${bookId}`,
          method: "DELETE",
        }),
      }
    ),
    borrowBook: builder.mutation<
      { success: boolean; message: string },
      { book: string; quantity: number; dueDate: string }
    >({
      query: ({ book, quantity, dueDate }) => ({
        url: `borrow`,
        method: "POST",
        body: { book, quantity, dueDate },
      }),
    }),

    // ✅ New: Borrow Summary Query
    getBorrowSummary: builder.query<BorrowSummaryResponse, void>({
      query: () => "borrow",
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery, 
} = booksApi;
