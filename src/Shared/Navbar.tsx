import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">My Library</Link>
        </div>

        {/* Menu Button for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
          >
            Home
          </Link>
          <Link
            to="/create-book"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
          >
            Add Book
          </Link>
          <Link
            to="/books/:id"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
          >
            Edit Book
          </Link>
          <Link
            to="/borrow-summary"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
          >
            borrow-summary
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="space-y-4 text-center">
          <Link to="/" className="block text-white py-2">
            Home
          </Link>
          <Link to="/create-book" className="block text-white py-2">
            Add Book
          </Link>
          <Link to="/books/:id" className="block text-white py-2">
            Edit Book
          </Link>
          <Link to="/borrow-summary" className="block text-white py-2">
            borrow-summary
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
