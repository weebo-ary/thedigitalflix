// src/components/DropdownMenu.js
import React from "react";
import { FaMoneyBill } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DropdownMenuServices = () => {
  return (
    <div className="absolute top-full left-0 mt-0 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-10">
      <Link
        to="/institutions-and-classes"
        className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
      >
        <FaMoneyBill /> Cmime
      </Link>
    </div>
  );
};

export default DropdownMenuServices;
