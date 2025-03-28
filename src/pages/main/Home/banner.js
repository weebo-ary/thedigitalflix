import { ArrowRightOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import IllustrationLight from "../../../assets/Images/WhatsApp Image 2025-03-07 at 15.38.48_64b3a539.jpg";
import IllustrationTwo from "../../../assets/Images/TheDigitalFlix WEBSITE DEVELOPMENT PPC SEO.jpg";
import IllustrationThree from "../../../assets/Images/TheDigitalFlix ONLINE AND OFFLINE CLASSES GET SCHOLARSHIPS  JOB OPPORTUNITIES and CERTIFICATIONS.jpg";
import IllustrationFour from "../../../assets/Images/TheDigitalFlix COURSES FOR STUDENTS PROFESSIONAL ENTREPRENEURS AND JOB SEEKERS.jpg";
import IllustrationFive from "../../../assets/Images/TheDigitalFlix GET JOBS IN DIGITAL MARKETING BECOME A FREELANCER START YOUR OWN AGENCY.jpg";
import VideoBanner from "../../../assets/Video/Banner.mp4";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Feature1 from "../../../assets/Images/Feat2.jpg";
import Logo from "../../../assets/Logo/LightLogo.png";
import Modal from "./modal";

function Banner() {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === leftSectionRef.current) {
            setIsLeftVisible(true);
          } else if (entry.target === rightSectionRef.current) {
            setIsRightVisible(true);
          }
        }
      });
    }, observerOptions);

    if (leftSectionRef.current) {
      observer.observe(leftSectionRef.current);
    }

    if (rightSectionRef.current) {
      observer.observe(rightSectionRef.current);
    }
  }, []);

  return (
    <div className="mx-0 lg:mx-0 md:mx-0 sm:mx-0 xs:mx-0 lg:mb-0 lg:mt-10 xs:mt-0 lg:min-h-screen md:h-min-h-screen sm:min-h-screen xs:min-h-screen  flex flex-row md:flex-row items-start justify-start sm:flex-col xs:flex-col overflow-hidden p-5 md:gap-10">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full min-h-screen md:min-h-screen sm:h-auto xs:h-130 object-cover opacity-90 dark:opacity-30 z-0"
      >
        <source src={VideoBanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className="hidden">
        {isLeftVisible} {isRightVisible}
      </h2>
      <Carousel
        className="relative w-full cursor-pointer -mt-20 z-0"
        showArrows={true}
        showStatus={false}
        autoPlay
        stopOnHover
        infiniteLoop
        interval={7500}
        showThumbs={false}
        swipeable = {false}
      >
        <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse items-center justify-start text-start w-full h-full gap-6 mb-10 p-4 pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full">
            <p>
              Connect with us{" "}
              <a href="https://www.linktr.ee/thedigitalflix" target="_blank" rel="noreferrer"><span className="text-red-500">@thedigitalflix</span></a>
            </p>
            <h1 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              DIGITAL MARKETING COURSE IN BHOPAL | POWERED BY
              <span className="text-red-600"> ARTIFICIAL INTELLIGENCE</span>
            </h1>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              Welcome to The DigitalFlix Institute of Digital Marketing – where
              innovation meets education. Our AI-enabled digital marketing
              courses equip you with cutting-edge tools and strategies to excel
              in the digital world. Master in-demand skills like SEO, social
              media marketing, PPC, and AI-driven strategies to stay ahead in
              the industry.
            </p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition"
              >
                Enroll Now
              </button>
              <Link to="/contact">
                <button className="text-gray-300 transition duration-100 ease-in-out hover:text-white font-semibold py-2 px-4 rounded-lg">
                  Learn More <ArrowRightOutlined className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <img
              src={IllustrationFive}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse items-center justify-start text-start w-full h-full p-4 pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full">
            <p>
              Connect with us{" "}
              <a href="https://www.linktr.ee/thedigitalflix" target="_blank" rel="noreferrer"><span className="text-red-500">@thedigitalflix</span></a>
            </p>
            <h2 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              <span className="text-red-600">WEBSITE DEVELOPMENT</span> | SEO |
              SOCIAL MEDIA | PPC | ARTIFICIAL INTELLIGENCE
            </h2>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              Our AI-powered courses are designed to equip you with cutting-edge
              skills in Website Development, Search Engine Optimization (SEO),
              Social Media Marketing, Pay-Per-Click (PPC) Advertising, and
              Artificial Intelligence applications in marketing. Gain hands-on
              experience with real-world projects and industry-recognized
              certifications.
            </p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition"
              >
                Enroll Now
              </button>

              <Link to="/contact">
                <button className="text-gray-300 transition duration-100 ease-in-out hover:text-white font-semibold py-2 px-4 rounded-lg">
                  Learn More <ArrowRightOutlined className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full">
            <img
              src={IllustrationTwo}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse xs:mt-7 items-center justify-start text-start w-full h-full pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full p-4">
            <p>
              Connect with us{" "}
              <a href="https://www.linktr.ee/thedigitalflix" target="_blank" rel="noreferrer"><span className="text-red-500">@thedigitalflix</span></a>
            </p>
            <h2 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              <span className="text-red-600">ONLINE AND OFFLINE</span> CLASSES |
              GET <span className="text-red-600">SCHOLARSHIPS</span>,{" "}
              <span className="text-red-600">JOB</span> OPPORTUNITIES &{" "}
              <span className="text-red-600">CERTIFICATIONS</span>
            </h2>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              Whether you prefer online or offline classes, we offer flexible
              learning options tailored to your needs. Unlock exclusive
              scholarships, gain access to top job opportunities, and earn
              industry-recognized certifications to boost your career. Join a
              thriving community of learners and experts, and take the next step
              toward digital success
            </p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition"
              >
                Enroll Now
              </button>
              <Link to="/contact">
                <button className="text-gray-300 transition duration-100 ease-in-out hover:text-white font-semibold py-2 px-4 rounded-lg">
                  Learn More <ArrowRightOutlined className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <img
              src={IllustrationThree}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse items-center justify-start text-start w-full h-full pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full p-4">
            <p>
              Connect with us{" "}
              <a href="https://www.linktr.ee/thedigitalflix" target="_blank" rel="noreferrer"><span className="text-red-500">@thedigitalflix</span></a>
            </p>
            <h2 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              COURSES FOR <span className="text-red-600">STUDENTS</span>,{" "}
              <span className="text-red-600">PROFESSIONALS</span>,{" "}
              <span className="text-red-600">ENTREPRENEURS</span> &{" "}
              <span className="text-red-600">JOB</span> SEEKERS
            </h2>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              No matter where you are in your career, TheDigitalFlix has the
              perfect course for you! Whether you’re a student looking to start
              early, a professional aiming to upskill, an entrepreneur ready to
              grow your business, or a job seeker searching for high-demand
              skills, our expert-led training will equip you for success.
            </p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition"
              >
                Enroll Now
              </button>
              <Link to="/contact">
                <button className="text-gray-300 transition duration-100 ease-in-out hover:text-white font-semibold py-2 px-4 rounded-lg">
                  Learn More <ArrowRightOutlined className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <img
              src={IllustrationFour}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse xs:mt-7 items-center justify-start text-start w-full h-full pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full p-4">
            <p>
              Connect with us{" "}
              <a href="https://www.linktr.ee/thedigitalflix" target="_blank" rel="noreferrer"><span className="text-red-500">@thedigitalflix</span></a>
            </p>
            <h2 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              GET JOBS IN{" "}
              <span className="text-red-600">DIGITAL MARKETING</span> | BECOME A{" "}
              <span className="text-red-600">FREELANCER</span> | START YOUR OWN{" "}
              <span className="text-red-600">DIGITAL AGENCY</span>
            </h2>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              TheDigitalFlix empowers you with in-demand digital marketing
              skills to land high-paying jobs, work independently as a
              freelancer, or build your own successful digital agency. Learn
              from industry experts, gain hands-on experience, and unlock
              endless career opportunities in the digital world.
            </p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition"
              >
                Enroll Now
              </button>
              <Link to="/contact">
                <button className="text-gray-300 transition duration-100 ease-in-out hover:text-white font-semibold py-2 px-4 rounded-lg">
                  Learn More <ArrowRightOutlined className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <img
              src={IllustrationLight}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </Carousel>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={Feature1} // Change with your image URL
        logoSrc={Logo} // Change with your logo URL
        head1="Welcome to Our Platform"
        head2="Please enter your details below"
        buttonText="Submit"
      />
    </div>
  );
}

export default Banner;
