import { ArrowRightOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import IllustrationLight from "../../../assets/Images/CertOfComp.png";
import IllustrationTwo from "../../../assets/Images/lor.png";
import IllustrationThree from "../../../assets/Images/res.png";
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
    <div className="mx-0 lg:mx-0 md:mx-0 sm:mx-0 xs:mx-0 lg:mb-0 lg:mt-10 xs:mt-10 flex flex-row md:flex-row items-start justify-start sm:flex-col xs:flex-col overflow-hidden p-5 md:gap-10">
      <h2 className="hidden">
        {isLeftVisible} {isRightVisible}
      </h2>
      <Carousel
        className="relative w-full cursor-pointer "
        showArrows={true}
        showStatus={false}
        autoPlay
        stopOnHover
        infiniteLoop
        interval={2500}
      >
        <div className="flex flex-row-reverse items-center justify-start text-start w-full h-full gap-6 mb-10 p-4 pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full">
            <h1 className="text-5xl font-bold text-white mb-4 mt-4">
              TheDigitalFlix Certificate of Completion 🏅
            </h1>
            <p className="text-xl font-semibold text-white mb-8">
              Receive an officially framed course completion certificate from
              TheDigitalFlix, validating your expertise in digital marketing.
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
          <div className="w-1/2">
            <img
              src={IllustrationLight}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center justify-start text-start w-full h-full p-4 pl-6 pr-6">
          <div className="flex flex-col mb-10 p-4 w-full">
            <h2 className="text-5xl font-bold text-white mb-4 mt-4">
              Letter of Recommendation 🏆
            </h2>
            <p className="text-xl font-semibold text-white mb-8">
              Get a personalized Letter of Recommendation (LOR) from
              TheDigitalFlix, adding credibility to your profile.
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

          <div className="w-1/2">
            <img
              src={IllustrationTwo}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center justify-start text-start w-full h-full pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full p-4">
            <h2 className="text-5xl font-bold text-white mb-4 mt-4">
              FlixPro Resume 📄
            </h2>
            <p className="text-xl font-semibold text-white mb-8">
              Receive a professionally designed, job-ready resume, tailored for
              digital marketing and optimized for recruiter visibility.
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
          <div className="w-1/2">
            <img
              src={IllustrationThree}
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
