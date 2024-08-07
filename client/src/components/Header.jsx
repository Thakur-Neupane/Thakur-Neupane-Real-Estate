import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Thakur</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-slate-700 sm:hidden"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links for Large Screens */}
        <nav className="hidden sm:flex sm:gap-4 sm:items-center sm:bg-transparent">
          <Link to="/" className="text-slate-700 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-slate-700 hover:underline">
            About
          </Link>
          <Link
            to="/profile"
            className="flex items-center space-x-2 text-slate-700 hover:underline"
          >
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <span>Sign in</span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu */}
        <ul
          className={`fixed inset-0 bg-slate-200 p-6 transform transition-transform duration-300 ease-in-out sm:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/" className="text-slate-700 hover:underline block mb-4">
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="/about"
              className="text-slate-700 hover:underline block mb-4"
            >
              About
            </Link>
          </li>
          <li
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2"
          >
            <Link
              to="/profile"
              className="flex items-center space-x-2 text-slate-700 hover:underline"
            >
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <span>Sign in</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
