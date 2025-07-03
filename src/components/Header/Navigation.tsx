import { NavLink } from "react-router";
import { ThemeToggler } from "../Theme/Theme-Toggler";
import { Link } from "react-router";

const Navigation = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/all-books"
          className="text-white font-medium hover:text-fuchsia-300"
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/create-book"
          className="text-white font-medium hover:text-fuchsia-300"
        >
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/borrow-summary"
          className="text-white font-medium hover:text-fuchsia-300"
        >
          Borrow Summary
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="text-xl font-medium text-fuchsia-200 hover:text-fuchsia-300"
        >
          Bookworm Bridge
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Navigation;
