import { useGetBorrowedBooksQuery } from "@/redux/api/borrowBookApi";
import LoadingSpinner from "@/components/Utilities/LoadingSpinner";
import { BookOpen, AlertCircle } from "lucide-react";

const BorrowedBooks = () => {
  const {
    data: borrowedBooks,
    isLoading,
    error,
    refetch,
  } = useGetBorrowedBooksQuery();

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="flex items-center justify-center mt-12">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Borrowed Books
          </h2>
          <p className="text-gray-600 mb-4">
            Sorry! Something went wrong while loading your borrowed books.
          </p>
          <button onClick={() => refetch()} className="btn btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Borrowed Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {borrowedBooks?.map((book, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 text-blue-500 mr-2" />
                <h2 className="text-lg text-gray-800 font-semibold">
                  {book.book.title}
                </h2>
              </div>
            </div>

            <p className="text-gray-700 font-semibold">
              ISBN: <span className="font-normal">{book.book.isbn}</span>
            </p>
            <p className="text-gray-700 font-semibold">
              Total Quantity:{" "}
              <span className="font-normal">{book.totalQuantity}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
