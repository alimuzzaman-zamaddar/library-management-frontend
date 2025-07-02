import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  useDeleteBookMutation, useGetBooksQuery } from "../../services/booksApi";

import type { BookData } from "./AddBook";
import BorrowModal from "./BorrowModal";

const Home = () => {
  const { data: books, error, isLoading } = useGetBooksQuery({});
  const navigate = useNavigate();
  const [deleteBook] = useDeleteBookMutation();

  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [selectedBookCopies, setSelectedBookCopies] = useState<number>(0);
  console.log(selectedBookId);

  if (isLoading) return <div className="text-center text-xl">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-xl text-red-500">
        Error fetching books
      </div>
    );

  

    const handleDelete = async (bookId: string) => {
      const confirmed = confirm("Are you sure you want to delete this book?");
      if (!confirmed) return;

      try {
        const result = await deleteBook(bookId).unwrap();
        alert(result.message); // Or use toast
      } catch (err: any) {
        alert(err?.data?.message || "Failed to delete book.");
      }
    };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Book List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books?.data.map((book: BookData) => (
          <div
            key={book._id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-gray-900">
                {book.title}
              </h3>
              <p className="text-lg text-gray-600 mt-2">{book.author}</p>
              <div className="mt-4 text-gray-700">
                <p>
                  <strong>Genre:</strong> {book.genre}
                </p>
                <p>
                  <strong>ISBN:</strong> {book.isbn}
                </p>
                <p>
                  <strong>Description:</strong> {book.description}
                </p>
                <p>
                  <strong>Copies:</strong> {book.copies}
                </p>
                <p>
                  <strong>Available:</strong> {book.available ? "Yes" : "No"}
                </p>
              </div>

              {/* Edit button */}
              <div className="mt-4 text-right">
                <button
                  onClick={() => navigate(`/books/${book._id}`)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              </div>

              {/* View Details button */}
              <div className="mt-2 text-right">
                <button
                  onClick={() => navigate(`/details/${book._id}`)}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                  Details
                </button>
              </div>

              {/* Borrow button */}
              <div className="mt-2 text-right">
                <button
                  onClick={() => {
                    setSelectedBookId(book?._id);
                    setSelectedBookCopies(book.copies);
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Borrow
                </button>
              </div>

              <button
                onClick={() => handleDelete(book._id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mt-2"
              >
                Delete
              </button>

              <div className="mt-4 text-right text-sm text-gray-500">
                <p>Added on: {new Date(book.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Borrow Modal */}
      {selectedBookId && (
        <BorrowModal
          bookId={selectedBookId}
          maxCopies={selectedBookCopies}
          onClose={() => setSelectedBookId(null)}
        />
      )}
    </div>
  );
};

export default Home;
