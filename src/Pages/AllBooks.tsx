import BookCard from "@/components/Utilities/BookCard";
import { useState } from "react";
import { useEffect } from "react";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
      {books.map((book: any) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default AllBooks;
