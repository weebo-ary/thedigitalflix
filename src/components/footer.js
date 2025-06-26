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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.173626173378!2d19.815901615421253!3d41.32910990243447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310fd92c40df%3A0x4323f7757aff7f39!2sTiran%C3%AB%2C%20Albania!5e0!3m2!1sen!2sus!4v1715341062023!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex md:flex md:items-start md:justify-between xs:grid sm:grid sm:grid-cols-1 xs:grid-cols-1 px-12 gap-8">
        {/* Column 1: Company Logo / Branding */}
        <div className="space-y-4 md:w-1/4 xs:w-full sm:w-full md:border-r xs:border-none sm:border-none">
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
            TheDigitalFlix.al
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            Kurset tona të mbështetura nga Inteligjenca Artificiale ju pajisin
            me mjete moderne dhe strategji të cilat ju bëjnë te shkëlqeni në
            botën dixhitale.
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
              Lidhuni me ne në LinkedIn
            </a>
            {/* <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <InstagramOutlined className="text-2xl text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-700 transition-colors duration-300" />
            </a> */}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4 ">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Linqe të shpejta
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Kreu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Rreth nesh
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Blogjet
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Na kontaktoni
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Blogjet
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/blogs/1"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Historia e dy mollëve
              </Link>
            </li>
            <li>
              <Link
                to="/blogs/2"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Kuptimi i fjalëve kyçe LSI në SEO
              </Link>
            </li>
            <li>
              <Link
                to="/blogs/3"
                className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"
              >
                Breadcrumbs në faqet e internetit, <br />
                Përralla e Hansel dhe Gretel
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Na kontaktoni
          </h4>
          <p className="text-gray-600 dark:text-gray-500">
            Email:{" "}
            <a
              href="mailto:support@company.com"
              className="hover:text-gray-800 dark:hover:text-white"
            >
              thedigitalflix.al@gmail.com
            </a>
          </p>
          <p className="text-gray-600 dark:text-gray-500">
            Phone: <br />
            <a
              href="tel:+918770885079"
              className="hover:text-gray-800 dark:hover:text-white"
            >
              +355674824786
            </a>
            <br />
          </p>
          {/* <p className="text-gray-600 dark:text-gray-500">
            NCR Office : P41 Etheria, 24th Floor, Bhutani <br/> 
            Alphathum, Sector 90, Noida (U.P.), 201305
          </p> */}
        </div>
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
      <div className="mt-10 pb-6 text-center border-t pt-5">
        <p className="text-gray-600 dark:text-gray-400">
          © 2025 DigitalFlix Solutions Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
