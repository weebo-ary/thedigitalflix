import React from "react";
import AboutIllustration from "../../assets/Images/Vision.jpg";
import MissionIllustration from "../../assets/Images/about.jpg";
import { LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import VideoBanner from "../../assets/Video/About.mp4";
import Connect from "../products/EdgeGateway/connect";
import AJPic from "../../assets/Images/AJ.jpg";
import AlpeshImg from "../../assets/Images/IMG-20240307-WA0006.jpg";
import MayuriImg from "../../assets/Images/Mayuri.jpg";
import PrajwalPic from "../../assets/Images/Prajwal.jpg";
import SangharshImg from "../../assets/Images/SangharshImg.jpg";
import ZhakuImg from "../../assets/Images/Zhaku.jpeg";
import ShivajiImg from "../../assets/Images/ShivajiImg.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* First Section: Introduction */}
      <section className="h-auto relative py-16 bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-800 dark:via-gray-800 dark:to-gray-800">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-screen object-cover opacity-90 dark:opacity-30 z-0 "
        >
          <source src={VideoBanner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mx-auto px-6 lg:px-8 relative z-10">
          <h1 className="md:text-center sm:text-start xs:text-start text-5xl text-white mb-6">
            <span className="text-red-600">THEDIGITALFLIX</span> COMPANY &
            INSTITUTE OF <span className="text-red-600">DIGITAL</span> MARKETING
          </h1>
          <p className="md:text-3xl sm:text-xl xs:text-xl text-gray-300 mx-auto md:text-center sm:text-start xs:text-start">
            At <span className="text-red-600">TheDigitalFlix</span>, we empower
            businesses and aspiring marketers alike. Our AI-driven digital
            marketing services help brands scale with data-driven SEO, PPC, and
            social media strategies, while our Institute of Digital Marketing
            provides hands-on training and industry-recognized certifications
            for students, professionals, and entrepreneurs to excel in the
            evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className=" bg-white dark:bg-gray-800 transition-colors duration-500">
        <div className="mx-auto ">
          <div className=" grid grid-cols-1 md:grid-cols-1 gap-12">
            {/* Vision */}
            <div className="text-start flex md:flex-row sm:flex-col xs:flex-col items-center gap-20 justify-center ml-10 xs:ml-0 sm:ml-0 xs:p-4 sm:p-4">
              <img
                src={AboutIllustration}
                width={500}
                alt="about-us"
                className="rounded-lg z-10"
              />
              <div className="md:w-full z-10">
                <h2 className="md:text-6xl sm:text-2xl xs:text-2xl font-bold text-black dark:text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-3xl sm:text-xl xs:text-xl text-gray-700 dark:text-gray-300">
                  To be{" "}
                  <span className="text-red-500 animate-pulse">
                    India’s Leading Digital Marketing Institute & Agency
                  </span>
                  , shaping future-ready professionals through innovation,
                  technology, and industry expertise. We envision a world where
                  AI-powered marketing and automation drive success for
                  individuals and businesses alike. By fostering a community of
                  skilled marketers, entrepreneurs, and digital leaders, we aim
                  to redefine the future of digital learning. With continuous
                  upskilling, mentorship, and global networking, we aspire to
                  create a digitally empowered generation. 🚀
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="text-start flex md:flex-row-reverse sm:flex-col xs:flex-col items-center justify-center mr-10 gap-10 xs:mr-0 sm:mr-0 xs:p-4 sm:p-4">
              <img
                src={MissionIllustration}
                width={700}
                alt="mission"
                className="rounded-xl"
              />
              <div className="w-full ml-8">
                <h2 className="md:text-6xl sm:text-2xl xs:text-2xl font-bold text-black dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-3xl sm:text-xl xs:text-xl text-gray-700 dark:text-gray-300">
                  To empower individuals with{" "}
                  <span className="text-red-500 animate-pulse">
                    AI-Driven Digital Marketing{" "}
                  </span>
                  skills, hands-on training, and globally recognized
                  certifications, ensuring career growth and business success.
                  We aim to bridge the gap between traditional education and
                  industry demands, ensuring career growth and business success.
                  Our courses are designed for students, professionals, and
                  entrepreneurs, helping them master SEO, PPC, social media, and
                  AI marketing. With online and offline learning options, we
                  make quality digital education accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
        <div className="absolute top-42 right-96 blur-sm">
          <svg width="150" height="100">
            {Array.from({ length: 4 }).map((_, rowIndex) =>
              Array.from({ length: 6 }).map((_, colIndex) => (
                <circle
                  key={`${rowIndex}-${colIndex}`}
                  cx={20 * colIndex + 10}
                  cy={20 * rowIndex + 10}
                  r="3"
                  fill="#9FD2C7"
                />
              ))
            )}
          </svg>
        </div>
        <div className="absolute top-42 left-96 xs:left-10 blur-sm">
          <svg width="150" height="100">
            {Array.from({ length: 4 }).map((_, rowIndex) =>
              Array.from({ length: 6 }).map((_, colIndex) => (
                <circle
                  key={`${rowIndex}-${colIndex}`}
                  cx={20 * colIndex + 10}
                  cy={20 * rowIndex + 10}
                  r="3"
                  fill="#9FD2C7"
                />
              ))
            )}
          </svg>
        </div>
        <div className="w-full mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
            Meet Our Founders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEKXjs8zN4Utw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732797916693?e=1747267200&v=beta&t=Utp1qblQP92TopijCnyECK8DBmYxCBmkBonAvMUcR8I"
                alt="Shantanu"
                className="w-1/2 rounded-full mx-auto object-cover"
              />

              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Shantanu Tarey
              </h3>
              <p className="text-center mt-2">(Founder & CEO)</p>
              <div className="mt-4 flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/shantanu-tarey-67b43412b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinOutlined />
                </a>{" "}
                <a href="mailto:connect@thedigitalflix.com">
                  <MailOutlined />
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQHc5hnsie4i7A/profile-displayphoto-shrink_400_400/B4DZN0xPtQHUAk-/0/1732830890846?e=1747267200&v=beta&t=i_xyvUPXf_vteAUqJa3z91_0FZiD4DVWU3VaYLXY2V0"
                alt="Aryan"
                className="w-1/2 rounded-full mx-auto object-cover"
              />
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Aryan Bhardwaj
              </h3>
              <p className="text-center mt-2">(Co-Founder & CTO)</p>
              <div className="mt-4 flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/aryan19"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinOutlined />
                </a>{" "}
                <a href="mailto:connect@thedigitalflix.com">
                  <MailOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute bottom-82 left-40 animate-float blur-sm">
        <svg width="80" height="80">
          <circle cx="40" cy="40" r="30" fill="#FF9AA2" />
          <circle cx="20" cy="20" r="10" fill="#9FD2C7" />
          <circle cx="60" cy="60" r="10" fill="#FFD700" />
        </svg>
      </div>

      <div className="absolute top-42 right-28 blur-sm">
        <svg width="70" height="70">
          <circle cx="35" cy="35" r="20" fill="#A0CED9" />
          <circle cx="50" cy="50" r="15" fill="#F5A623" />
        </svg>
      </div>

      {/* Employees Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-500">
        <div className="w-200 w-full mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Employee 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src={MayuriImg}
                alt="Mayuri Mishra"
                className="w-1/2 rounded-lg mx-auto object-cover"
              />
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Mayuri Mishra
              </h3>
              <p className="text-center mt-2">(Chief Content Officer)</p>
              <h3 className="text-center text-lg font-bold text-gray-600 dark:text-gray-200 mt-2">
                Content writing and Copywriting expert
              </h3>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="##" target="_blank" rel="noreferrer">
                  <LinkedinOutlined />
                </a>{" "}
                <a href="##">
                  <MailOutlined />
                </a>
              </div>
            </div>

            {/* Employee 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src={AlpeshImg}
                alt="Alpesh Chouhan"
                className="w-1/2 rounded-lg mx-auto object-cover"
              />
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Alpesh Chouhan
              </h3>
              <h3 className="text-center text-lg font-bold text-gray-600 dark:text-gray-200 mt-6">
                Social Media Marketing, Content Creation and Political PR Expert
              </h3>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="##" target="_blank" rel="noreferrer">
                  <LinkedinOutlined />
                </a>{" "}
                <a href="##">
                  <MailOutlined />
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src={PrajwalPic}
                alt="Prajwal Bisane"
                className="w-1/2 rounded-lg mx-auto object-cover"
              />
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Prajwal Bisane
              </h3>
              <h3 className="text-center text-lg font-bold text-gray-600 dark:text-gray-200 mt-6">
                Search Engine Optimization Expert
              </h3>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="##" target="_blank" rel="noreferrer">
                  <LinkedinOutlined />
                </a>{" "}
                <a href="##">
                  <MailOutlined />
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src={ShivajiImg}
                alt="Sangharsh Ramteke"
                className="w-1/2 rounded-lg mx-auto object-cover"
              />
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Shivaji Sharma
              </h3>
              <h3 className="text-center text-lg font-bold text-gray-600 dark:text-gray-200 mt-6">
                COO & PR Expert
              </h3>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="##" target="_blank" rel="noreferrer">
                  <LinkedinOutlined />
                </a>{" "}
                <a href="##">
                  <MailOutlined />
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src={SangharshImg}
                alt="Sangharsh Ramteke"
                className="w-1/2 rounded-lg mx-auto object-cover"
              />
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Sangharsh Ramteke
              </h3>
              <h3 className="text-center text-lg font-bold text-gray-600 dark:text-gray-200 mt-6">
                Paid Advertising and Marketing Expert
              </h3>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="##" target="_blank" rel="noreferrer">
                  <LinkedinOutlined />
                </a>{" "}
                <a href="##">
                  <MailOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-500">
        <div className="w-full mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
            Meet Our Albanian Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Employee 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src={AJPic}
                alt="aj"
                className="w-1/3 rounded-lg mx-auto object-cover"
              />
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Ajdi Hysaj
              </h3>
              <h3 className="text-center text-lg font-bold text-gray-600 dark:text-gray-200 mt-6">
                Advanced Communication & English Expert
              </h3>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="##" target="_blank" rel="noreferrer">
                  <LinkedinOutlined />
                </a>{" "}
                <a href="##">
                  <MailOutlined />
                </a>
              </div>
            </div>

            {/* Employee 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src={ZhakuImg}
                alt="Zhaku"
                className="w-1/3 rounded-lg mx-auto object-cover"
              />
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Zhaku
              </h3>
              <h3 className="text-center text-lg font-bold text-gray-600 dark:text-gray-200 mt-6">
                International Marketing Expert
              </h3>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="##" target="_blank" rel="noreferrer">
                  <LinkedinOutlined />
                </a>{" "}
                <a href="##">
                  <MailOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Connect />
    </div>
  );
};

export default AboutUs;
