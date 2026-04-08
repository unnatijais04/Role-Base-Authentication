import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white dark:bg-black shadow-md">
      <div className="flex justify-between items-center h-16 px-4 sm:px-8 max-w-7xl mx-auto font-bold text-black dark:text-white">
        <ul className="flex gap-6 sm:gap-8 items-center text-sm">
          <li>
            <Link
              className="hover:text-gray-900 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-md transition-all duration-300"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-900 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-md transition-all duration-300"
              to="/blogs"
            >
              Blogs
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-white" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
