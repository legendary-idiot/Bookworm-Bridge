import { createBrowserRouter } from "react-router";
import App from "./../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, element: <h2>All Books</h2> },
      { path: "/all-books", element: <h2>All Books</h2> },
      { path: "/create-book", element: <h2>Add Book</h2> },
      { path: "/edit-book/:id", element: <h2>Edit Book</h2> },
      { path: "/book/:id", element: <h2>Book Details</h2> },
    ],
  },
]);
