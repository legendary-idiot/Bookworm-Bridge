import AddBookForm from "@/components/Utilities/AddBookForm";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/animations/BookReadAnimation.json";

const AddBook = () => {
  return (
    <div className="my-10">
      <h1 className="text-xl sm:text-2xl font-bold text-center">
        Add a New Book to Bookworm Bridge
      </h1>
      <p className="text-center text-base font-thin max-w-2xl mx-auto my-4">
        Fill out the details below to add a new book to your library collection.
        The more information you provide, the easier it will be for others to
        discover!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AddBookForm />
        <div className="flex justify-center items-center">
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default AddBook;
