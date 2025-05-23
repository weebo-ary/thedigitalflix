import React, { useEffect, useState, useRef } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

const BannerWithFadingGridBackground = () => {
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
    <div className="relative h-auto md:mt-10 md:mb-10 flex md:flex-col gap-20 sm:flex-col xs:flex-col justify-center items-center text-center p-8 -gray-100 dark:bg-gray-900">
      {/* Banner Content */}
      <div
        ref={textRef}
        className={`px-4 md:px-0 transition-transform duration-1000 ease-in-out ${
          isTextVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-20"
        }`}
      >
        <h1 className="text-6xl md:text-6xl sm:text-4xl xs:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Avantazhet
        </h1>
      </div>
      <div className="flex md:flex-row sm:flex-col xs:flex-col w-full gap-10 max-w-6xl text-center">
        <p className="text-base md:text-2xl text-gray-800 dark:text-white mb-10 w-full">
          <b>
            <CheckCircleOutlined
              className="animate-bounce"
              style={{ fontSize: "24px", color: "green" }}
            />{" "}
            Google Ads  
          </b>{" "}
          <br />{" "}
          <p className="text-lg mt-2 text-gray-400">Rrisni kohën e UpTime Robot dhe përmirësojeni duke analizuar të dhënat historike.
          </p>
        </p>
        <p className="text-base md:text-2xl text-gray-800 dark:text-white mb-6 w-full">
          <b>
            <CheckCircleOutlined
              className="animate-bounce"
              style={{ fontSize: "24px", color: "green" }}
            />{" "}
             Marketingu i drejtuar nga Inteligjenca Artificiale
          </b>{" "}
          <br />{" "}
          <p className="text-lg mt-2 text-gray-400">Reduktoni kohën e humbur në prodhim përmes zbulimit të anomalive dhe të dhënave historike të humbjeve.
          </p>
        </p>{" "}
        <p className="text-base md:text-2xl text-gray-800 dark:text-white mb-6 w-full">
          <b>
            <CheckCircleOutlined
              className="animate-bounce"
              style={{ fontSize: "24px", color: "green" }}
            />{" "}
             SEO e avancuar
          </b>{" "}
          <br />{" "}
          <p className="text-lg mt-2 text-gray-400">Përmirësoni sigurinë duke ndjekur pozicionin e robotëve në kohë reale për të shmangur çdo përplasje.
          </p>
        </p>
        <p className="text-base md:text-2xl text-gray-800 dark:text-white mb-6 w-full">
          <b>
            <CheckCircleOutlined
              className="animate-bounce"
              style={{ fontSize: "24px", color: "green" }}
            />{" "}
            Marketingu i Performancës
          </b>{" "}
          <br />{" "}
          <p className="text-lg mt-2 text-gray-400">Improve safety by tracking robot position in real-time to avoid any collision.</p>
        </p>
      </div>
    </div>
  );
};

export default BannerWithFadingGridBackground;
