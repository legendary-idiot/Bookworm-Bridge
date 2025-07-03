import UpdateBookModal from "./UpdateBookModal";

const BookCard = ({ book }) => {
  return (
    <div className="card dark:bg-gray-800 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
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
          <button className="btn btn-primary border-none">View Details</button>
          <div className="card-actions items-center justify-end">
            <UpdateBookModal />
            <button className="btn btn-square bg-red-500 hover:bg-red-700 border-none">
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
