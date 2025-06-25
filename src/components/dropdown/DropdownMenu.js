import {
  BookOutlined,
  CodeOutlined,
  InstagramOutlined,
  JavaScriptOutlined,
  ProjectOutlined,
  RocketOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaShip } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className=" md:absolute xs:relative md:border-t-0 xs:border-t top-full lg:w-120 md:w-64 xs:w-72 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 z-10 md:flex xs:-mt-44">
      <div className=" md:w-1/2 xs:w-1/2 border-gray-100 dark:border-gray-700 pr-4">
        <h2 className="lg:text-2xl md:text-2xl sm:text-xl xs:text-xl font-bold text-white">
          Bulk Packages
        </h2>
        <Link
          to="/flixstart-digital"
          className="flex md:w-50 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <BookOutlined className="text-xs mr-3" /> FlixStart Digital
        </Link>
        <Link
          to="/flixelite-digital-pro"
          className="flex md:w-44 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <SnippetsOutlined className="text-xs mr-3" /> FlixElite Digital Pro
        </Link>
        <Link
          to="/flixyoung-digital-creators"
          className="flex md:w-52 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <ProjectOutlined className="text-xs mr-3" /> FlixYoung Digital
          Creators
        </Link>
        <h2 className="lg:text-2xl md:text-2xl sm:text-xl xs:text-xl font-bold text-white">
          Web Development
        </h2>
        <Link
          to="/flixbuild-web"
          className="flex md:w-52 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <CodeOutlined className="text-xs mr-3" /> FlixBuild Web
        </Link>
        <Link
          to="/flix-javascript"
          className="flex md:w-52 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <JavaScriptOutlined className="text-xs mr-3" /> Flix Javascript
        </Link>
        <h2 className="lg:text-2xl md:text-2xl sm:text-xl xs:text-xl font-bold text-white">
          Personality Development
        </h2>
        <Link
          to="/flix-adv-english"
          className="flex md:w-52 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <RiEnglishInput className="text-xs mr-3" /> Flix Advance English
        </Link>
      </div>
      <div className="md:w-1/2 xs:w-1/2 border-gray-100 dark:border-gray-700 pr-4">
        <h2 className="lg:text-2xl md:text-2xl sm:text-xl xs:text-xl font-bold text-white">
          Marketing
        </h2>
        <Link
          to="/flix-ai"
          className="flex md:w-52 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <BsGraphUp className="text-xs mr-3" /> FlixAI Marketing
        </Link>
        <Link
          to="/flix-seo"
          className="flex md:w-52 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <RocketOutlined className="text-xs mr-3" /> Flix SEO
        </Link>
        <Link
          to="/flix-mark-auto"
          className="flex md:w-52 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <SettingOutlined className="text-xs mr-3" /> Flix Marketing Automation
        </Link>
        <Link
          to="/flix-smm"
          className="flex md:w-52 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <InstagramOutlined className="text-xs mr-3" /> Flix Social Media
          Marketing
        </Link>
        <Link
          to="/flix-email-sms"
          className="flex md:w-52 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <MdMarkEmailUnread className="text-xs mr-3" /> Flix EMail & SMS
          Marketing
        </Link>
        <Link
          to="/flix-ecommerce"
          className="flex md:w-52 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <ShoppingCartOutlined className="text-xs mr-3" /> Flix E-commerce
          Marketing
        </Link>
        <Link
          to="/flix-ppc"
          className="flex md:w-52 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <GiClick className="text-xs mr-3" /> Flix Google Ads (PPC)
        </Link>

        <Link
          to="/flix-dropship-affiliate-marketing"
          className="flex md:w-52 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <FaShip className="text-xs mr-3" /> Flix DropShipping & Affiliate
          Marketing (AM)
        </Link>
        <br />
      </div>

      <div className="md:w-128 sm:w-72 md:pl-5">
        {/* <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-0 xs:hidden md:flex">
          <KeyOutlined style={{marginRight:"4px", fontSize:"16px"}}/> Key Features
        </h3>
        <div className="md:hidden">
          <button
            onClick={togglePopup}
            className="flex bg-slate-300 w-1/2 items-center px-2 py-3 text-gray-700 dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <span style={{ marginTop: "-5px" }}>By Industry</span>
            <ArrowRightOutlined
              style={{ fontSize: "10px", marginLeft: "10px" }}
            />
          </button>
        </div> */}

        {/* Popup component */}
        {/* <Popup isOpen={isPopupOpen} togglePopup={togglePopup} />
        <h3 className="xs:hidden font-medium text-gray-700 dark:text-gray-300">
          By Industry
        </h3>
        <div className="md:grid xs:hidden grid-cols-2 gap-4">
          <div>
            <div className="mt-3 space-y-2">
              <Link
                to="/library"
                className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <BookOutlined className="text-xs mr-3" /> Feature 1
              </Link>
              <Link
                to="/documentation"
                className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <SnippetsOutlined className="text-xs mr-3" /> Feature 2
              </Link>
              <Link
                to="/academy"
                className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <ExpandAltOutlined className="text-xs mr-3" /> Feature 3
              </Link>
              <Link
                to="/portal"
                className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <ProjectOutlined className="text-xs mr-3" /> Feature 4
              </Link>
              <Link
                to="/youtube-channel"
                className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <YoutubeOutlined className="text-xs mr-3" /> Feature 5
              </Link>
            </div>
          </div>

          <div className="mt-3 space-y-2 ">
            <Link
              to="/library"
              className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <BookOutlined className="text-xs mr-3" /> Feature 6
            </Link>
            <Link
              to="/documentation"
              className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <SnippetsOutlined className="text-xs mr-3" /> Feature 7
            </Link>
            <Link
              to="/academy"
              className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <ExpandAltOutlined className="text-xs mr-3" /> Feature 8
            </Link>
            <Link
              to="/portal"
              className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <ProjectOutlined className="text-xs mr-3" /> Feature 9
            </Link>
            <Link
              to="/youtube-channel"
              className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <YoutubeOutlined className="text-xs mr-3" /> Feature 10
            </Link>
          </div>
        </div>
        <br />
        <div className="border-b xs:hidden"></div> */}

        {/* <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg md:flex xs:hidden items-center">
          <img
            src="https://via.placeholder.com/80"
            alt="Example"
            className="h-20 w-20 rounded-md mr-4"
          />
          <div>
            <span className="bg-green-100 text-md dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-sm">
              Industrial DataOps
            </span>
            <h5 className="font-medium text-md text-gray-700 dark:text-gray-300 mt-2">
              Three Tips for Going from Legacy to Mainstream
            </h5>
            <p className="text-gray-600  dark:text-gray-400 text-sm">
              Wondering whether the legacy systems of record can be augmented to
              meet the demands of modern business?
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DropdownMenu;
