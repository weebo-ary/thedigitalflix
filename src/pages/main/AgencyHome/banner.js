import { ArrowRightOutlined, ArrowsAltOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import IllustrationLight from "../../../assets/Images/Agency5Img.jpg";
import IllustrationTwo from "../../../assets/Images/Agency2img.jpg";
import IllustrationThree from "../../../assets/Images/Agency3Img.jpg";
import IllustrationFour from "../../../assets/Images/Agency4Img.jpg";
import IllustrationFive from "../../../assets/Images/Agency1img.jpg";
import VideoBanner from "../../../assets/Video/Agency.mp4";
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
        swipeable={false}
      >
        <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse items-center justify-start text-start w-full h-full gap-6 mb-10 p-4 pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full mt-10">
            <p>
              Connect with us{" "}
              <a
                href="https://www.linktr.ee/thedigitalflix"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-red-500">@thedigitalflix</span>
              </a>
            </p>
            <h1 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              Drive Business Growth with TheDigitalFlix –{" "}
              <span className="text-red-600">AI Powered Digital Marketing</span>
            </h1>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              Supercharge your brand with AI-driven marketing strategies, SEO,
              PPC, and social media growth. As the top digital marketing company
              in Bhopal, we create data-backed campaigns that boost traffic,
              leads, and sales. Get customized solutions for your business
              success – Let’s grow together! 🚀
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
              <a
                href="https://www.linktr.ee/thedigitalflix"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-red-500">@thedigitalflix</span>
              </a>
            </p>
            <h2 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              Cutting-Edge Marketing with the Latest{" "}
              <span className="text-red-600">AI Tools & Software</span>
            </h2>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              We leverage advanced AI automation, data analytics, and top
              marketing tools like SEMrush, Ahrefs, Google Analytics, HubSpot &
              ChatGPT to drive smarter, faster, and more profitable campaigns.
              Stay ahead of the competition with TheDigitalFlix’s tech-driven
              marketing solutions! 🤖
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
        <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse xs:mt-7 items-center justify-start text-start w-full h-full pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full p-4">
            <p>
              Connect with us{" "}
              <a
                href="https://www.linktr.ee/thedigitalflix"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-red-500">@thedigitalflix</span>
              </a>
            </p>
            <h2 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              More <span className="text-red-600">Leads</span>, More{" "}
              <span className="text-red-600">Sales</span> – We Focus on High ROI
              & Business Growth
            </h2>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              Our performance marketing approach is designed for maximum returns
              on investment. Whether through PPC ads, conversion-optimized
              landing pages, or retargeting strategies, we ensure every rupee
              spent generates real business growth. Your success is our
              priority! 📈
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
        <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse items-center justify-start text-start w-full h-full pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full p-4">
            <p>
              Connect with us{" "}
              <a
                href="https://www.linktr.ee/thedigitalflix"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-red-500">@thedigitalflix</span>
              </a>
            </p>
            <h2 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              Trusted by{" "}
              <span className="text-red-600">
                Startups, Small Businesses & Global Enterprises
              </span>
            </h2>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              From local startups and e-commerce brands to established
              corporations, we help businesses in real estate, healthcare,
              education, finance, and more scale their digital presence. No
              matter the industry, our custom strategies ensure measurable
              success. 🏢
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
              <a
                href="https://www.linktr.ee/thedigitalflix"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-red-500">@thedigitalflix</span>
              </a>
            </p>
            <h2 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              Your Growth Partner –{" "}
              <span className="text-red-600">
                Creative, Data-Driven & Transparent
              </span>{" "}
              Marketing
            </h2>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              At TheDigitalFlix, we don’t just run ads – we create strategies
              that work! Our team blends creativity, data insights, and market
              research to deliver customized digital marketing solutions.
              Transparent reporting, expert execution, and guaranteed results –
              Let’s grow together! 🚀
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
