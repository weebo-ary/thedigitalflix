import React, { useEffect, useState, useRef } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

const BannerWithFadingGridBackground = () => {
  // Array to create 64 grid items (8x8 grid)

  const [isTextVisible, setIsTextVisible] = useState(false);
  const [setIsImageVisible] = useState(false);

  const textRef = useRef(null);
  const imageRef = useRef(null);

  // IntersectionObserver to observe text and image
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // 20% visibility threshold
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === textRef.current) {
          setIsTextVisible(entry.isIntersecting);
        } else if (entry.target === imageRef.current) {
          setIsImageVisible(entry.isIntersecting);
        }
      });
    }, observerOptions);

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
  });

  return (
    <div className="relative h-auto md:mt-10 md:mb-10 flex md:flex-col gap-20 sm:flex-col xs:flex-col justify-center items-center text-center p-8 bg-gray-100 dark:bg-gray-900">
      {/* Banner Content */}
      <div
        ref={textRef}
        className={`relative max-w-3xl px-4 md:px-0 transition-transform duration-1000 ease-in-out ${
          isTextVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-20"
        }`}
      >
        <h1 className="text-6xl md:text-6xl sm:text-4xl xs:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Përfitimet
        </h1>
      </div>
      <div className="flex md:flex-row sm:flex-col xs:flex-col gap-10 w-full text-center">
        <p className="text-base md:text-2xl text-gray-800 dark:text-white mb-10 w-full">
          <b>
            <CheckCircleOutlined
              className="animate-bounce"
              style={{ fontSize: "24px", color: "green" }}
            />{" "}
            Zhvillim Frontend
          </b>{" "}
          <br />{" "}
          <p className="text-lg mt-2 text-gray-400">
            Dizajno faqe moderne dhe responsive duke përdorur korniza si
            Tailwind dhe Bootstrap.
          </p>
        </p>
        <p className="text-base md:text-2xl text-gray-800 dark:text-white mb-6 w-full">
          <b>
            <CheckCircleOutlined
              className="animate-bounce"
              style={{ fontSize: "24px", color: "green" }}
            />{" "}
            Zhvillim Backend
          </b>{" "}
          <br />{" "}
          <p className="text-lg mt-2 text-gray-400">
            Krijo logjikë të fuqishme në anën e serverit dhe API me Node.js dhe
            Express.
          </p>
        </p>{" "}
        <p className="text-base md:text-2xl text-gray-800 dark:text-white mb-6 w-full">
          <b>
            <CheckCircleOutlined
              className="animate-bounce"
              style={{ fontSize: "24px", color: "green" }}
            />{" "}
            Integrim me Bazat e të Dhënave
          </b>{" "}
          <br />{" "}
          <p className="text-lg mt-2 text-gray-400">
            Lidhu me databaza në kohë reale si MongoDB dhe Firebase për ruajtje
            dhe rikthim të të dhënave.
          </p>
        </p>
        <p className="text-base md:text-2xl text-gray-800 dark:text-white mb-6 w-full">
          <b>
            <CheckCircleOutlined
              className="animate-bounce"
              style={{ fontSize: "24px", color: "green" }}
            />{" "}
            Kontrolli i Versioneve me Git & GitHub
          </b>{" "}
          <br />{" "}
          <p className="text-lg mt-2 text-gray-400">
            Bashkëpuno në mënyrë efikase dhe menaxho kodin me mjetet standarde
            të industrisë.
          </p>
        </p>
      </div>
    </div>
  );
};

export default BannerWithFadingGridBackground;
