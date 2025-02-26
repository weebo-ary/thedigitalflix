import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircleOutlined,
  ThunderboltOutlined,
  DatabaseOutlined,
  ToolOutlined,
  CloudDownloadOutlined,
  MonitorOutlined,
  RadarChartOutlined,
  BarChartOutlined,
  NumberOutlined,
} from "@ant-design/icons";

function ProcessSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isZoomedIn, setIsZoomedIn] = useState(false); // State to control zoom animation

  const sectionRef = useRef(null);

  // Define the array of carousel items
  const carouselItems = [
    {
      icon: <ThunderboltOutlined className="text-3xl text-blue-500 mt-3" />,
      title: "100% Placement Assistance",
      bg: "bg-green-100",
      bgHover: "bg-green-300"
    },
    {
      icon: <RadarChartOutlined className="text-4xl text-blue-500" />,
      title: "Practice on Live Project",
      bg: "bg-orange-100",
      bgHover: "bg-orange-300"
    },
    {
      icon: <BarChartOutlined className="text-4xl text-blue-500" />,
      title: "Get Scholarships",
      bg: "bg-blue-100",
      bgHover: "bg-blue-300"
    },
    {
      icon: <CheckCircleOutlined className="text-4xl text-blue-500" />,
      title: "Start Your Own Company",
      bg: "bg-pink-100",
      bgHover: "bg-pink-300"
    },
  ];

  const carouselItemsTwo = [
    {
      icon: <DatabaseOutlined className="text-4xl text-blue-500" />,
      title: "Pay Fees in Installments",
      bg: "bg-violet-100",
      bgHover: "bg-violet-300"
    },

    {
      icon: <CloudDownloadOutlined className="text-4xl text-blue-500" />,
      title: "Interview Training",
      bg: "bg-purple-100",
      bgHover: "bg-purple-300"
    },
    {
      icon: <NumberOutlined className="text-4xl text-blue-500" />,
      title: "Online / Offline Classes",
      bg: "bg-green-100",
      bgHover: "bg-green-300"
    },
    {
      icon: <ToolOutlined className="text-4xl text-blue-500" />,
      title: "Certificate of Completion",
      bg: "bg-orange-100",
      bgHover: "bg-orange-300"
    },
  ];

  const carouselItemsThree = [
    {
      icon: <CheckCircleOutlined className="text-4xl text-blue-500" />,
      title: "Personality Development Classes",
      bg: "bg-pink-100",
      bgHover: "bg-pink-300"
    },
    {
      icon: <ToolOutlined className="text-4xl text-blue-500" />,
      title: "Industry Expert Sessions",
      bg: "bg-yellow-100",
      bgHover: "bg-yellow-300"
    },

    {
      icon: <MonitorOutlined className="text-4xl text-blue-500" />,
      title: "Become a Freelancer",
      bg: "bg-red-100",
      bgHover: "bg-red-300"
    },
    {
      icon: <MonitorOutlined className="text-4xl text-blue-500" />,
      title: "AI Integrated Courses",
      bg: "bg-blue-100",
      bgHover: "bg-blue-300"
    },
  ];

  useEffect(() => {
    const handleNext = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length); // Loop through the items
        setIsTransitioning(false);
        setProgress(0);
      }, 500);
    };

    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 2000);

      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 0));
      }, 25);

      return () => {
        clearInterval(interval);
        clearInterval(progressInterval);
      };
    }
  }, [currentIndex, isPaused, carouselItems.length]);

  // Handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setIsPaused(true);
    setProgress(0);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setProgress(0);
  };

  // IntersectionObserver for zoom effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsZoomedIn(true); // Zoom in when section is in view
          } else {
            setIsZoomedIn(false); // Zoom out when section leaves view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`mx-8 xs:mx-4 flex md:flex-row sm:flex-col lg:mt-10 lg:mb-10 xs:flex-col sm:mt-10 xs:mt-0 bg-gray-100 dark:bg-gray-900 p-10 rounded-lg transform transition-transform duration-700 ${
        isZoomedIn ? "scale-100" : "scale-90 opacity-50"
      }`} // Apply zoom in/out and opacity based on scroll
    >
      <div className="absolute bottom-30 left-30 w-64 h-auto bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="flex flex-col items-start justify-center gap-10">
        <div className="">
          <h2 className="text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-gray-900 dark:text-white">
            Digitize Your <span className="text-orange-500">Processes</span> And
            Gain Analytics From Day One
          </h2>
        </div>
        <div className="">
          {" "}
          <p className="text-3xl md:text-3xl sm:text-xl xs:text-xl text-gray-600 dark:text-gray-400">
            Take a look at all the key <b>Processes</b> we cover. No Need To
            Design Or Develop Custom Software For Your Operations.
          </p>{" "}
        </div>
      </div>
      <div className="flex flex-col xs:max-w-full items-center justify-center">
        <div
          className="relative w-144 md:w-144 sm:max-w-full xs:max-w-full p-6 bg-gradient-to-r bg-gray-100 dark:bg-gray-900 rounded-sm text-center overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col xs:max-w-full items-center justify-center">
            <div
              className="relative w-144 md:w-144 sm:max-w-full xs:max-w-full p-6 bg-gradient-to-r bg-gray-100 dark:bg-gray-900 rounded-sm text-center overflow-hidden cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`z-10 sm:max-w-full xs:max-w-full top-5 flex flex-row-reverse items-center justify-center gap-5  transition-all duration-500 ease-in-out transform p-2 rounded-lg ${
                  isTransitioning
                    ? "translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                } ${carouselItems[currentIndex].bg} hover:bg-green-300`}
              >
                <div>{carouselItems[currentIndex].icon}</div>
                <div>
                  <h3 className="mt-4 text-2xl md:text-2xl sm:text-sm xs:text-sm text-end font-bold text-gray-800 dark:text-black">
                    {carouselItems[currentIndex].title}
                  </h3>
                  <p className="mt-2 text-end md:text-lg sm:text-xs xs:text-xs text-gray-600 dark:text-white">
                    {carouselItems[currentIndex].description}
                  </p>
                </div>
              </div>

              <br />

              <div
                className={`relative z-10 top-5 sm:max-w-full xs:max-w-full flex flex-row items-center justify-center gap-5 transition-all duration-500 ease-in-out transform p-2 rounded-lg mb-4 ${
                  isTransitioning
                    ? "translate-x-[-100%] opacity-0"
                    : "translate-x-0 opacity-100"
                } ${carouselItemsTwo[currentIndex].bg} hover:bg-red-300`}
              >
                <div>{carouselItemsTwo[currentIndex].icon}</div>
                <div>
                  <h3 className="mt-4 text-2xl md:text-2xl sm:text-sm xs:text-sm text-start font-bold text-gray-800 dark:text-black">
                    {carouselItemsTwo[currentIndex].title}
                  </h3>
                  <p className="mt-2 text-start md:text-lg sm:text-xs xs:text-xs text-gray-600 dark:text-gray-400">
                    {carouselItemsTwo[currentIndex].description}
                  </p>
                </div>
              </div>

              <br />

              <div
                className={`relative z-10 top-5 sm:max-w-full xs:max-w-full flex flex-row-reverse items-center justify-center gap-5  transition-all duration-500 ease-in-out transform p-2 rounded-lg mb-4 ${
                  isTransitioning
                    ? "translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                } ${carouselItemsThree[currentIndex].bg} hover:bg-blue-300`}
              >
                <div>{carouselItemsThree[currentIndex].icon}</div>
                <div>
                  <h3 className="mt-4 text-2xl md:text-2xl sm:text-sm xs:text-sm text-end font-bold text-gray-800 dark:text-black">
                    {carouselItemsThree[currentIndex].title}
                  </h3>
                  <p className="mt-2 text-end md:text-lg sm:text-xs xs:text-xs   text-gray-600 dark:text-gray-400">
                    {carouselItems[currentIndex].description}
                  </p>
                </div>
              </div>
              <br />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent dark:bg-gray-700">
                <div
                  className="h-1 bg-gray-800 dark:bg-white"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
