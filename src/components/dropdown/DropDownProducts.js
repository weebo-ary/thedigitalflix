// src/components/DropdownMenu.js
import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="absolute top-full left-0 mt-0 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-10">
      <Link
        to="/blogs/1"
        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
      >
        The Tale of Two Apples
      </Link>
      <Link
        to="/blogs/2"
        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
      >
        Understanding LSI Keywords
      </Link>
    </div>
  );
};

export default DropdownMenu;
