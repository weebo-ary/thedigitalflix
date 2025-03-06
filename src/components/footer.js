import React from "react";
import { LinkedinOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-gray-100 mt-0 dark:bg-gray-900 text-black  dark:text-white transition-colors duration-500">
      <div className="w-full h-[400px] border-4 overflow-hidden shadow-lg mb-10 border-slate-300 rounded-lg">
        <iframe
          title="Google Maps Location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.4923012940374!2d77.3882281!3d23.219583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c430007d08acf%3A0x4759d4f33282627d!2sThe%20DigitalFlix%20Institute%20of%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1709053501234!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex md:flex md:items-start md:justify-between xs:grid sm:grid sm:grid-cols-1 xs:grid-cols-1 px-12 gap-8">
        {/* Column 1: Company Logo / Branding */}
        <div className="space-y-4 md:w-1/4 xs:w-full sm:w-full md:border-r xs:border-none sm:border-none">
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
            DigitalFlix Solutions Pvt. Ltd.
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            Our AI-enabled digital marketing courses equip you with cutting-edge
            tools and strategies to excel in the digital world. .
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            {/* <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FacebookOutlined className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-700 transition-colors duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <TwitterOutlined className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300" />
            </a> */}
            <a
              href="https://www.linkedin.com/company/thedigitalflix"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <LinkedinOutlined className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-800 transition-colors duration-300" />
              Connect with us on LinkedIn!
            </a>
            {/* <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <InstagramOutlined className="text-2xl text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-700 transition-colors duration-300" />
            </a> */}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4 ">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/iiot-gateway"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                IIoT Gateway
              </Link>
            </li>
            <li>
              <Link
                to="/platform"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Platform
              </Link>
            </li>

            <li>
              <Link
                to="/contact-us"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Contact-Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Solutions
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/cnc-monitoring"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                CNC Monitoring
              </Link>
            </li>
            <li>
              <Link
                to="/robot-monitoring"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Robot Monitoring
              </Link>
            </li>
            <li>
              <Link
                to="/energy-monitoring"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Energy Monitoring
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Services
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/training"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Training
              </Link>
            </li>
            <li>
              <Link
                to="/consultancy"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Consultancy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Contact Us
          </h4>
          <p className="text-gray-600 dark:text-gray-500">
            Email:{" "}
            <a
              href="mailto:support@company.com"
              className="hover:text-gray-800 dark:hover:text-white"
            >
              connect@thedigitalflix.com
            </a>
          </p>
          <p className="text-gray-600 dark:text-gray-500">
            Phone: <br />
            <a
              href="tel:+918770885079"
              className="hover:text-gray-800 dark:hover:text-white"
            >
              +91-9201457156
            </a>
            <br />
            <a
              href="tel:+917987999491"
              className="hover:text-gray-800 dark:hover:text-white"
            >
              +91-7987999491
            </a>
            <br />
            <a
              href="tel:07553162670"
              className="hover:text-gray-800 dark:hover:text-white ml-5"
            >
              0755-3162670
            </a>
          </p>
          {/* <p className="text-gray-600 dark:text-gray-500">
            NCR Office : P41 Etheria, 24th Floor, Bhutani <br/> 
            Alphathum, Sector 90, Noida (U.P.), 201305
          </p> */}
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-4 p-2">
        <a
          href="https://maps.app.goo.gl/s5FpCN3utg6r2HEX9"
          target="_blank"
          rel="noreferrer"
          className="w-full"
        >
          <p className=" bg-white text-black rounded-lg p-2 hover:text-gray-800 dark:hover:text-red-400 w-full cursor-pointer">
            <b>India Corp-Office</b> : The DigitalFlix Institute of Digital
            Marketing, B1, Kamla Nagar, Chitragupt Nagar, Kotra Sultanabad,
            Bhopal, Madhya Pradesh 462003
          </p>
        </a>

        <p className=" bg-white text-black rounded-lg p-2 hover:text-gray-800 dark:hover:text-red-400 w-full">
          <b>Registered Office</b> : LIG 158 Kotra Sultanabad, Behind Givernmetn
          School, C.T.T.Nagar, Huzur, Bhopal- 462003, Madhya Pradesh
        </p>

        <p className=" bg-white text-black rounded-lg p-2 py-5 hover:text-gray-800 dark:hover:text-red-400 w-full">
          <b>Albania Office</b> : 8R97+R62, Mbrapa LSI-se, prane Conad, Rruga
          Andon Zako Çajupi, Tiranë, Albania
        </p>
      </div>
      {/* <div className="bg-gray-100 dark:bg-gray-900 border-t py-6 mt-10 transition duration-500">
        <div className="mt-7 mx-auto px-4 flex flex-col md:flex-row xs:flex-row items-center justify-around">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h4 className="text-xl font-bold md:text-center xs:text-start text-gray-900 dark:text-white">Join our newsletter</h4>
            <p className="md:text-center xs:text-start text-gray-600 dark:text-gray-400">
              Stay updated with the latest news and offers.
            </p>
          </div>
          <form className="w-full md:w-auto flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-64 px-4 py-2 rounded-lg border dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none mb-2 md:mb-0 md:mr-2"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div> */}
      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t pt-5">
        <p className="text-gray-600 dark:text-gray-400">
          © 2024 Opsight AI Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
