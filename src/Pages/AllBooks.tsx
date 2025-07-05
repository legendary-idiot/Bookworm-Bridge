import BookCard from "@/components/Utilities/BookCard";
import LoadingSpinner from "@/components/Utilities/LoadingSpinner";
import type { Book } from "@/interface/BookInterface";
import { useGetBooksQuery } from "@/redux/api/booksApi";

const AllBooks = () => {
  const { data: books, isLoading, error } = useGetBooksQuery();

  if (isLoading) return <LoadingSpinner />;
  if (error)
    return (
      <div className="text-2xl font-light text-rose-500 my-8">
        Sorry! Something went wrong.
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
      {books &&
        books.map((book: Book) => <BookCard key={book._id} book={book} />)}
    </div>
  );
};

export default AllBooks;
