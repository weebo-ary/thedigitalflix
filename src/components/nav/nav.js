import React, { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle";
import DropdownMenu from "../dropdown/DropdownMenu";
import DropdownMenuProducts from "../dropdown/DropDownProducts";
import DarkLogo from "../../assets/Logo/DarkLogo.png";
import LightLogo from "../../assets/Logo/LightLogo.png";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./nav.css";
import Sidebar from "../Drawer/Sidebar";
import { FaDownload, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdOutlineWifiCalling3 } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import Feature1 from "../../assets/Images/Feat2.jpg";

import {
  ControlOutlined,
  DotChartOutlined,
  ExclamationCircleOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import DropdownMenuServices from "../dropdown/DropDownService";
import Modal from "../../pages/main/Home/modal";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenProduct, setDropdownProduct] = useState(false);
  const [dropdownOpenServices, setDropdownServices] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav
        className={`sticky top-0 z-50  flex flex-col justify-between items-center  transition duration-500 ${
          isScrolled
            ? "bg-gray-100 dark:bg-gray-800 shadow-md"
            : "bg-white dark:bg-transparent"
        }`}
      >
        <div className="w-full">
          <div className=" flex flex-row items-center justify-center bg-gray-900 p-2">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <a
                    className="text-white transition hover:text-green-600/75 flex gap-1"
                    href="https://api.whatsapp.com/send/?phone=919201457156&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <span className="text-xs"> Whatsapp: </span>
                    <RiWhatsappFill />{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-pink-600/75 flex gap-1"
                    href="https://www.instagram.com/thedigitalflix/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <span className="text-xs">Instagram: </span>
                    <RiInstagramFill />{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-blue-600/75 flex gap-1"
                    href="https://www.instagram.com/thedigitalflix/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <span className="text-xs">Facebook: </span>
                    <FaFacebook />{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-blue-400/75 flex gap-1"
                    href="https://www.linkedin.com/company/the-digitalflix-pvt-ltd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <span className="text-xs">Linkedin: </span>
                    <FaLinkedin />{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-red-600/75 flex gap-1"
                    href="https://x.com/TheDigitalFlix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <span className="text-xs">X (Twitter): </span>
                    <FaXTwitter />{" "}
                  </a>
                </li>
                <li>
                  {/* <a className="text-white transition hover:text-red-600/75 flex items-center gap-1"> */}{" "}
                  |{/* </a> */}
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-red-600/75 flex gap-1"
                    href="tel:+919201457156"
                    rel="Call us for "
                  >
                    <span className="text-xs"> Call Us: </span>
                    <MdOutlineWifiCalling3 />
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-red-600/75 flex gap-1"
                    href="mailto:connect@thedigitalflix.com"
                    rel="TheDigitalFlix"
                  >
                    {" "}
                    <span className="text-xs">Mail Us: </span>
                    <MdEmail />{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-red-600/75 flex gap-1"
                    href="https://www.google.com/maps/place/The+DigitalFlix+Institute+of+Digital+Marketing/data=!4m2!3m1!1s0x0:0x4759d4f33282627d?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <span className="text-xs">Our Location: </span>
                    <FaLocationDot />{" "}
                  </a>
                </li>
                <li>
                  {/* <a className="text-white transition hover:text-red-600/75 flex items-center gap-1"> */}{" "}
                  |{/* </a> */}
                </li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-30 h-auto flex items-center justify-center bg-red-500 text-xs text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition gap-2"
                >
                  <FaDownload /> Brouchure
                </button>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-row w-full items-center justify-between p-4">
          <div className="flex items-center">
            <div className="">
              <div className="">
                <NavLink to="/">
                  <img
                    src={theme === "dark" ? DarkLogo : LightLogo}
                    alt={theme === "dark" ? "DarkLogo" : "LightLogo"}
                    className="w-48 lg:h-16 md:h-22 sm:h-10 xs:h-10"
                  />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex items-center -inset-0">
            <div className="md:flex space-x-9 xs:hidden">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "relative text-md font-medium p-1 text-black dark:text-white marker-underline active"
                    : "relative text-md font-medium p-1 text-gray-700 dark:text-gray-300 marker-underline hover:text-gray-600 dark:hover:text-red-600"
                }
              >
                <HomeOutlined /> Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "relative text-md font-medium p-1 text-gray-900 dark:text-white marker-underline active"
                    : "relative text-md font-medium p-1 text-black dark:text-white marker-underline hover:text-gray-500 dark:hover:text-red-600"
                }
              >
                <ExclamationCircleOutlined /> About Us
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
                      ? "relative text-md font-medium p-1 text-gray-900 dark:text-white marker-underline active"
                      : "relative text-md font-medium p-1 text-black dark:text-white marker-underline hover:text-gray-500 dark:hover:text-red-600"
                  }
                >
                  <DotChartOutlined />{" "}
                  <span style={{ cursor: "pointer" }}>Blogs</span>
                </NavLink>
                {dropdownOpenProduct && <DropdownMenuProducts />}
              </div>

              <div
                className="relative text-md font-medium p-1 text-black dark:text-white hover:text-red-500 dark:hover:text-red-600"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <DotChartOutlined />{" "}
                <span style={{ cursor: "pointer" }}>Solutions</span>
                {dropdownOpen && <DropdownMenu />}
              </div>
              <div
                className="relative text-md font-medium p-1 text-black dark:text-white hover:text-red-500 dark:hover:text-red-600"
                onMouseEnter={() => setDropdownServices(true)}
                onMouseLeave={() => setDropdownServices(false)}
              >
                <ControlOutlined />{" "}
                <span style={{ cursor: "pointer" }}>Services</span>
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
                <PhoneOutlined /> Contact
              </NavLink>
            </div>
          </div>
          <div className="flex items-center space-x-4 md:space-x-4 sm:space-x-3 xs:space-x-2">
            <div
              className="md:hidden xs:flex p-2 rounded-md bg-transparent hover:text-gray-500 dark:hover:text-red-500 text-black dark:text-white transition duration-500"
              onClick={toggleSidebar}
            >
              <MenuOutlined />
            </div>
            <ThemeToggle onThemeChange={handleThemeChange} />
            {/* <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="h-5 w-5 rounded-full"
          /> */}
            {/* <button className="flex items-center justify-center p-3 md:p-5 md:py-2 sm:p-2 xs:p-2 md:ml-0 bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-900 dark:bg-gray-700 text-white rounded-lg">
          <span className="md:text-xs sm:text-xs xs:text-xs xs:flex xs:items-center xs:justify-center">Login <LoginOutlined style={{marginLeft:'5px'}}/></span> 
        </button> */}
          </div>

          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={Feature1} // Change with your image URL
        logoSrc={LightLogo} // Change with your logo URL
        head1="Welcome to Our Platform"
        head2="Please enter your details below"
        buttonText="Submit"
      />
    </>
  );
};

export default Navbar;
