import { useParams, useNavigate } from "react-router";
import {
  useGetBookByIdQuery,
  useDeleteBookMutation,
} from "../redux/api/booksApi";
import LoadingSpinner from "../components/Utilities/LoadingSpinner";
import UpdateBookModal from "../components/Utilities/UpdateBookModal";
import BorrowBookModal from "../components/Utilities/BorrowBookModal";
import imageCover from "../assets/No-Photo-Cover.png";
import Swal from "sweetalert2";

const SingleBook = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: book, isLoading, error } = useGetBookByIdQuery(id!);
  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          deleteBook(id!).unwrap();
          navigate("/all-books");
        } catch (error) {
          console.error("Failed to delete book:", error);
        }
      }
    });
  };

  const handleBack = () => {
    navigate("/all-books");
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Book Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The book you're looking for doesn't exist or has been removed.
          </p>
          <button onClick={handleBack} className="btn btn-primary">
            Back to Books
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container mx-auto sm:px-4">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={handleBack}
            className="btn btn-outline border btn-sm"
          >
            ← Back to Books
          </button>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden md:flex">
            {/* Book Cover */}
            <div className="md:w-1/3">
              <div className="p-6">
                <img
                  src={imageCover}
                  alt={`${book.title} Cover`}
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="md:w-2/3 p-6">
              <div className="space-y-6">
                {/* Title and Status */}
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {book.title}
                  </h1>

                  <div
                    className={`badge px-2 ${
                      book.available ? "badge-success" : "badge-error"
                    }`}
                  >
                    {book.available ? "Available" : "Not Available"}
                  </div>
                </div>

                {/* Author */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Author
                  </h3>
                  <p className="text-gray-900 dark:text-white text-xl font-light">
                    {book.author}
                  </p>
                </div>

                {/* ISBN */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    ISBN
                  </h3>
                  <p className="text-gray-900 dark:text-white text-xl font-light">
                    {book.isbn}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Description
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xl font-light">
                    {book.description}
                  </p>
                </div>

                {/* Copies Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Availability
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {book.copies}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Total Copies
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {book.available ? book.copies : 0}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {book.available && book.copies > 0 && (
                    <BorrowBookModal
                      bookId={book._id!}
                      bookTitle={book.title}
                      availableCopies={book.copies}
                    />
                  )}
                  <UpdateBookModal id={book._id!} />
                  <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="btn btn-error btn-sm"
                  >
                    {isDeleting ? (
                      <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                      "🗑️ Delete Book"
                    )}
                  </button>
                </div>

                {/* Metadata */}
                {book.createdAt && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p>
                      Added: {new Date(book.createdAt).toLocaleDateString()}
                    </p>
                    {book.updatedAt && (
                      <p>
                        Last updated:{" "}
                        {new Date(book.updatedAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
