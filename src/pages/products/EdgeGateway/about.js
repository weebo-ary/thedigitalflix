import {
  BarChartOutlined,
  CloudOutlined,
  CommentOutlined,
  ConsoleSqlOutlined,
  FireOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import IiotBanner from "../../../assets/Illustration/iiot-banner.jpg";

function About() {
  const cardsRef = useRef([]);
  const [isVisible, setIsVisible] = useState([]);

  // Function to observe each card
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          setIsVisible((prevVisibility) => {
            const newVisibility = [...prevVisibility];
            newVisibility[index] = entry.isIntersecting;
            return newVisibility;
          });
        });
      },
      { threshold: 0.3 } // 30% visibility threshold for fade-in/out
    );

    // Observe each card
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
  }, []);

  const cardsData = [
    {
      icon: (
        <CommentOutlined style={{ fontSize: "4rem", marginBottom: "1rem" }} />
      ),
      title: "Supported Communication Protocols",
      description:
        "Modbus TCP/IP, Modbus RTU (RS 232 and RS 485), OPC UA, Ethernet/IP",
    },
    {
      icon: <WifiOutlined style={{ fontSize: "4rem", marginBottom: "1rem" }} />,
      title: "Versatile Connectivity",
      description:
        "Compatible with 4G, Wi-Fi, Ethernet, and Bluetooth Low Energy (BLE)",
    },
    {
      icon: (
        <ConsoleSqlOutlined
          style={{ fontSize: "4rem", marginBottom: "1rem" }}
        />
      ),
      title: "Local Data Processing",
      description:
        "Collect, process, and compute data on-site for immediate actionable insights",
    },
    {
      icon: <FireOutlined style={{ fontSize: "4rem", marginBottom: "1rem" }} />,
      title: "User-Friendly Interface",
      description:
        "Intuitive and flexible configuration through a user-friendly interface",
    },
    {
      icon: (
        <BarChartOutlined style={{ fontSize: "4rem", marginBottom: "1rem" }} />
      ),
      title: "High Performance",
      description:
        "Robust processing (2.4GHz) capabilities designed for demanding industrial environments",
    },
    {
      icon: (
        <CloudOutlined style={{ fontSize: "4rem", marginBottom: "1rem" }} />
      ),
      title: "Edge-to-Cloud Sync",
      description:
        "Automatically synchronize processed data from the edge to the cloud, ensuring seamless access to data anywhere.",
    },
  ];

  return (
    <div className="relative h-auto flex flex-col justify-center items-center text-start md:text-start p-8 ">
      <img
        src={IiotBanner}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 liopacity-30 opacity-30 dark:opacity-20"
      />
      <div className="text-center md:text-center sm:text-start xs:text-start mb-10">
        <h2 className="text-6xl md:text-6xl sm:text-4xl xs:text-4xl p-8">
          Key Features of{" "}
          <span className="relative inline-block">
            OpsightAI
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1213 73"
              fill="orange"
            >
              <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path>
            </svg>
          </span>
        </h2>
        <p className="text-2xl md:text-2xl sm:text-xl xs:text-xl p-8">
        Your first step towards digital transformation
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 max-w-6xl gap-10">
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            data-index={index}
            className={`bg-white dark:bg-gray-800 w-full shadow-lg dark:shadow-2xl h-auto p-8 rounded-lg transition-all duration-700 ease-in-out transform cursor-pointer hover:scale-105 ${
              isVisible[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="animate-bounce">{card.icon}</div>
            <h2 className="text-2xl font-semibold text-start mb-4">
              {card.title}
            </h2>
            <h2 className="text-xl text-gray-500 dark:text-gray-300 text-start">
              {card.description}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
