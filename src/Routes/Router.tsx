import { createBrowserRouter } from "react-router";
import App from "./../App";
import AllBooks from "../Pages/AllBooks";
import AddBook from "@/Pages/AddBook";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: AllBooks },
      { path: "/all-books", Component: AllBooks },
      { path: "/create-book", Component: AddBook },
      { path: "/edit-book/:id", element: <h2>Edit Book</h2> },
      { path: "/book/:id", element: <h2>Book Details</h2> },
    ],
  },
]);
