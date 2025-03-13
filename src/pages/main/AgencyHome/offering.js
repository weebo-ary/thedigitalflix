import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import React, { useEffect, useState, useRef } from "react";
import Logo from "../../../assets/Logo/DarkLogo.png";
import OfferingBg from "../../../assets/Images/marvin-meyer-SYTO3xs06fU-unsplash.jpg"; // Import the background image

const OfferingSection = () => {
  const blobsData = [
    {
      title: "Strategy & Execution",
      description:
        "Offer generic marketing strategies without in-depth business alignment.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "AI-Powered Marketing",
      description:
        "Rely on outdated manual processes, slow adaptation to AI trends.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Paid Ad Campaigns",
      description:
        "Run basic, non-optimized ad campaigns with high spending and low returns.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "SEO & Content Marketing",
      description:
        "Focus only on keywords, missing technical SEO, content depth, and authority-building.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Lead Generation & Sales Funnels",
      description:
        "Generate traffic without proper lead conversion and nurturing strategies.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Social Media Growth & Engagement",
      description:
        "Focus only on posting content without an engagement-driven strategy.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Data Analytics & Performance Tracking",
      description: "Provide basic reports with minimal actionable insights.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "E-Commerce & Dropshipping Support",
      description:
        "Lack expertise in e-commerce marketing, missing out on crucial growth strategies.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Email & Automation Marketing",
      description: "Send mass emails without personalization and automation.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Brand Building & Positioning",
      description:
        "Focus only on short-term digital ads without long-term branding.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
  ];

  const blobsDataTwo = [
    {
      title: "Strategy & Execution",
      description:
        "Provides customized, data-driven marketing strategies tailored to your industry, audience, and business goals.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "AI-Powered Marketing",
      description:
        "Uses AI-driven tools for automation, content generation, and advanced audience targeting to maximize ROI.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Paid Ad Campaigns",
      description:
        "Expertly manages Google Ads, Facebook Ads, and LinkedIn Ads, optimizing for cost-effectiveness and maximum conversions.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "SEO & Content Marketing",
      description:
        "Delivers full-spectrum SEO, from technical optimization to high-quality content, ensuring sustained organic growth.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Lead Generation & Sales Funnels",
      description:
        "Creates high-converting landing pages, sales funnels, and lead automation systems to drive real business results.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Social Media Growth & Engagement",
      description:
        "Develops viral strategies, community-building techniques, and influencer collaborations for rapid social media growth.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Data Analytics & Performance Tracking",
      description:
        "Uses advanced analytics & AI-based reporting to track, measure, and optimize campaign performance in real time.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "E-Commerce & Dropshipping Support",
      description:
        "Specializes in Shopify, WooCommerce, and Dropshipping, helping businesses scale with high-converting e-commerce strategies.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Email & Automation Marketing",
      description:
        "Implements AI-driven email sequences, automation workflows, and retargeting for higher engagement and sales.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Brand Building & Positioning",
      description:
        "Crafts high-impact brand positioning strategies to build authority, trust, and long-term customer loyalty.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // For scroll animation

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleNext = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blobsData.length); // Loop through the items
        setIsTransitioning(false);
      }, 500);
    };

    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, isPaused, blobsData.length]);

  // Scroll-based animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  // Handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden mb-20 md:mb-20 md:mt-20"
    >
      {/* Background Image */}
      <img
        src={OfferingBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 dark:opacity-20"
      />

      <div className="mx-auto relative z-10 flex flex-col md:flex-col sm:flex-row xs:flex-row bg-gray items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-8">
          <div
            className={`flex flex-col items-center justify-center transition-all duration-1000  ease-in-out  ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div
              className="flex md:flex-row-reverse xs:flex-col-reverse items-center justify-between  relative p-6 rounded-sm text-center overflow-hidden cursor-pointer "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`w-full h-80 xs:h-auto sm:h-auto rounded-lg ml-10 md:ml-10 xs:ml-0 relative z-10 dark:bg-transparent top-5 flex flex-col items-center justify-center gap-5 mb-10  `}
              >
                <h1 className="sticky top-0 z-50 text-5xl text-center rounded-xl bg-white py-4 dark:p-0 dark:bg-transparent w-full mb-10 text-green-400">
                  {" "}
                  TheDigitalFlix{" "}
                </h1>
                <div
                  className={`flex flex-col items-center justify-center rounded-xl bg-gray-800 py-4 dark:p-0 dark:bg-transparent gap-5 mb-5 transition-all duration-500 ease-in-out transform ${
                    isTransitioning
                      ? "translate-x-100% opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  <div className="text-5xl text-white">
                    {blobsDataTwo[currentIndex].icon}
                  </div>
                  <div>
                    <h3 className="mt-4 text-3xl md:text-xl xs:text-2xl text-center font-bold text-white">
                      {blobsDataTwo[currentIndex].title}
                    </h3>
                    <p className="mt-2 text-xl md:text-2xl xs:text-lg text-center text-gray-100">
                      {blobsDataTwo[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-auto h-auto md:py-5 overflow-hidden flex flex-col items-center justify-center xs:mt-5 sm:mt-5 xs:mb-5 sm:mb-5">
                <div className="border-t-2 w-full rotate-90 mt-20 sm:hidden xs:hidden"></div>
                <div className="z-50 py-5 rounded-lg flex items-center justify-center">
                  <img
                    src={Logo}
                    alt="logo"
                    className="md:w-full xs:w-64 md:h-full object-cover"
                  />
                </div>
                <div className="border-t-2 w-full rotate-90 mb-20 sm:hidden xs:hidden"></div>
              </div>

              <div
                className={`w-full h-80 rounded-lg mr-10 md:mr-10 xs:mr-0 relative z-10 top-5 flex flex-col items-center justify-center gap-5 sm:mb-10 xs:mb-10 `}
              >
                <h1 className="text-5xl text-center w-full text-red-400 mb-10 rounded-xl bg-white py-4 dark:p-0 dark:bg-transparent ">
                  {" "}
                  Others{" "}
                </h1>
                <div
                  className={`flex flex-col items-center justify-center gap-5 mb-2 rounded-xl bg-gray-800 py-4 dark:p-0 dark:bg-transparent transition-all duration-500 ease-in-out transform ${
                    isTransitioning
                      ? "translate-x-100% opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  <div className="text-5xl text-white">
                    {blobsData[currentIndex].icon}
                  </div>
                  <div>
                    <h3 className="mt-4 text-4xl md:text-xl xs:text-2xl text-center font-bold text-white">
                      {blobsData[currentIndex].title}
                    </h3>
                    <p className="mt-2 text-xl md:text-2xl xs:text-lg text-center text-gray-100">
                      {blobsData[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingSection;
