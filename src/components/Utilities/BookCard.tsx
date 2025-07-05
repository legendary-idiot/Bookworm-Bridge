import { Link } from "react-router";
import UpdateBookModal from "./UpdateBookModal";
import BorrowBookModal from "./BorrowBookModal";
import imageCover from "../../assets/No-Photo-Cover.png";
import type { Book } from "../../interface/BookInterface";
import Swal from "sweetalert2";
import { useDeleteBookMutation } from "@/redux/api/booksApi";

const BookCard = ({ book }: { book: Book }) => {
  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();

  const handleDelete = (id: string) => {
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
        } catch (error) {
          console.error("Failed to delete book:", error);
        }
      }
    });
  };
  return (
    <div className="card dark:bg-gray-800 shadow-sm">
      <figure>
        <img
          src={imageCover}
          alt="Book Cover"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {book.title}
          <div
            className={`badge badge-sm px-1 ${
              book.available ? "badge-success" : "badge-error"
            }`}
          >
            {book.available ? "Available" : "Not Available"}
          </div>
        </h2>
        <p className="text-base font-light">
          <span className="font-semibold">Author:</span> {book.author}
        </p>
        <p className="text-base font-light">
          <span className="font-semibold">Genre:</span> {book.genre}
        </p>
        <p className="text-base font-light">
          <span className="font-semibold">ISBN:</span> {book.isbn}
        </p>
        <p className="line-clamp-2 text-justify text-base font-light">
          <span className="font-semibold">Description:</span> {book.description}
        </p>
        <p className="text-base font-light">
          <span className="font-semibold">Copies:</span> {book.copies}
        </p>

        <div className="flex justify-between items-center flex-wrap gap-2 mt-4">
          <div className="flex gap-2 items-center">
            <Link
              to={`/book/${book._id}`}
              className="btn btn-primary border-none btn-sm"
            >
              View Details
            </Link>
            {book.available && book.copies > 0 && (
              <BorrowBookModal
                bookId={book._id!}
                bookTitle={book.title}
                availableCopies={book.copies}
              />
            )}
          </div>
          <div className="card-actions items-center justify-end">
            <UpdateBookModal id={book._id!} />
            <button
              className="btn btn-sm bg-red-500 hover:bg-red-700 border-none"
              onClick={() => handleDelete(book._id!)}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "🗑️"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
