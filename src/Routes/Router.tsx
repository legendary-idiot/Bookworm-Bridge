import { createBrowserRouter } from "react-router";
import App from "./../App";
import AllBooks from "../Pages/AllBooks";
import AddBook from "@/Pages/AddBook";
import SingleBook from "@/Pages/SingleBook";
import Error404 from "@/Pages/Error404";
import BorrowedBooks from "@/Pages/BorrowedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: AllBooks },
      { path: "/all-books", Component: AllBooks },
      { path: "/create-book", Component: AddBook },
      { path: "/book/:id", Component: SingleBook },
      { path: "/borrow-summary", Component: BorrowedBooks },
    ],
    errorElement: <Error404 />,
  },
]);
