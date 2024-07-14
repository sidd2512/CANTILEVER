// src/components/NavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  return (
    <nav className="fixed top-0 w-full   p-4 z-10 bg-gradient-to-r from-amber-50 to-amber-300 dark:bg-gradient-to-l dark:from-orange-200  dark:to-stone-900 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 text-sm font-semibold"
                : "text-black/80 dark:text-white/80 text-sm font-semibold hover:text-orange-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/latest-news"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 text-sm font-semibold"
                : "text-black/80 dark:text-white/80 text-sm font-semibold hover:text-orange-500"
            }
          >
            Latest News
          </NavLink>
          <NavLink
            to="/review"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 text-sm font-semibold"
                : "text-black/80 dark:text-white/80 text-sm font-semibold hover:text-orange-500"
            }
          >
            Review
          </NavLink>
        </div>
        {/* Right Side */}
        <div className="flex flex-row gap-5">
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 text-sm font-semibold"
                : "text-black/80 dark:text-white/80 text-sm font-semibold hover:text-orange-500"
            }
          >
            Contact Us
          </NavLink>
          <button
            onClick={toggleTheme}
            className="w-10 h-5 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
          >
            <div
              id="switch-toggle"
              className={`w-5 h-5 relative rounded-full transition duration-500 transform ${
                isDarkMode
                  ? "translate-x-full bg-black/50"
                  : "-translate-x-2 bg-yellow-500"
              } p-1 text-white`}
            >
              {isDarkMode ? darkIcon : lightIcon}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
