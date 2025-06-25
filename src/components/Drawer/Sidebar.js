// src/components/Sidebar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ControlOutlined,
  DotChartOutlined,
  ExclamationCircleOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import DropdownMenu from "../dropdown/DropdownMenu";
import DropdownMenuProducts from "../dropdown/DropDownProducts";
import DropdownMenuServices from "../dropdown/DropDownService";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenProduct, setDropdownProduct] = useState(false);
  const [dropdownOpenServices, setDropdownServices] = useState(false);

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-20 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={toggleSidebar}
    >
      <div
        className={`fixed top-0 left-0 w-72 bg-white dark:bg-gray-800 h-full shadow-lg z-30 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b-2 dark:bg-gray-700">
          <h2 className="text-xl font-semibold text-red-600 dark:text-red-600">
            TheDigitalFlix
          </h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 flex flex-col gap-5 p-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "relative text-md font-medium p-1 text-black dark:text-red-500 marker-underline active"
                : "relative text-md font-medium p-1 text-gray-700 dark:text-gray-300 marker-underline hover:text-gray-600 dark:hover:text-red-600"
            }
          >
            <HomeOutlined /> Kreu
          </NavLink>
          <div
            className={({ isActive }) =>
              isActive
                ? "relative text-md font-medium p-1 text-gray-900 dark:text-red-500 marker-underline active -ml-1"
                : "relative text-md font-medium p-1 text-black dark:text-white marker-underline hover:text-gray-500 dark:hover:text-red-600 -ml-1"
            }
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <DotChartOutlined />{" "}
            <span style={{ cursor: "pointer" }}>Kurse</span>
            {dropdownOpen && <DropdownMenu />}
          </div>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "relative text-md font-medium p-1 text-gray-900 dark:text-red-500 marker-underline active"
                : "relative text-md font-medium p-1 text-black dark:text-white marker-underline hover:text-gray-500 dark:hover:text-red-600"
            }
          >
            <ExclamationCircleOutlined /> Rreth Nesh
          </NavLink>
          <div
            className="relative text-md font-medium p-1 text-black dark:text-white hover:text-red-500 dark:hover:text-red-600"
            onMouseEnter={() => setDropdownProduct(true)}
            onMouseLeave={() => setDropdownProduct(false)}
          >
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "relative text-md font-medium p-1 text-gray-900 dark:text-red-500 marker-underline active -ml-1"
                  : "relative text-md font-medium p-1 text-black dark:text-white marker-underline hover:text-gray-500 dark:hover:text-red-600 -ml-1"
              }
            >
              <DotChartOutlined />{" "}
              <span style={{ cursor: "pointer" }}>Blogje</span>
            </NavLink>
            {dropdownOpenProduct && <DropdownMenuProducts />}
          </div>

          <div
            className="relative text-md font-medium p-1 text-black dark:text-white hover:text-red-500 dark:hover:text-red-600"
            onMouseEnter={() => setDropdownServices(true)}
            onMouseLeave={() => setDropdownServices(false)}
          >
            <ControlOutlined />{" "}
            <span style={{ cursor: "pointer" }}>Shërbime</span>
            {dropdownOpenServices && <DropdownMenuServices />}
          </div>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "relative text-md p-1 font-medium text-gray-900 dark:text-white marker-underline active"
                : "relative text-md p-1 font-medium text-black dark:text-white marker-underline hover:text-gray-500 dark:hover:text-red-600"
            }
          >
            <PhoneOutlined /> Kontakt
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
