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
          Avantazhet
        </h1>
      </div>
      <div className="flex md:flex-row sm:flex-col xs:flex-col gap-10 w-full text-center">
        <p className="text-base md:text-2xl text-gray-800 dark:text-white mb-10 w-full">
          <b>
            <CheckCircleOutlined
              className="animate-bounce"
              style={{ fontSize: "24px", color: "green" }}
            />{" "}
            SEO
          </b>{" "}
          <br />{" "}
          <p className="text-lg mt-2 text-gray-400">
            Shtoni kohën e funksionimit së makinës së kërkimit dhe përmirësoni
            OEE, OLE përmes aksesit në të dhënat historike.
          </p>
        </p>
        <p className="text-base md:text-2xl text-gray-800 dark:text-white mb-6 w-full">
          <b>
            <CheckCircleOutlined
              className="animate-bounce"
              style={{ fontSize: "24px", color: "green" }}
            />{" "}
            Rrjete sociale
          </b>{" "}
          <br />{" "}
          <p className="text-lg mt-2 text-gray-400">
            Reduktoni kohën e humbur në prodhim përmes zbulimit të anomalive dhe
            të dhënave historike të humbjeve.
          </p>
        </p>{" "}
        <p className="text-base md:text-2xl text-gray-800 dark:text-white mb-6 w-full">
          <b>
            <CheckCircleOutlined
              className="animate-bounce"
              style={{ fontSize: "24px", color: "green" }}
            />{" "}
            PPC
          </b>{" "}
          <br />{" "}
          <p className="text-lg mt-2 text-gray-400">
            Ruani cilësinë e qëndrueshme të prodhimit duke ndjekur parametrat e
            veglave dhe performancën e operatorëve me ndihmëm e të dhënave
            historike.
          </p>
        </p>
        <p className="text-base md:text-2xl text-gray-800 dark:text-white mb-6 w-full">
          <b>
            <CheckCircleOutlined
              className="animate-bounce"
              style={{ fontSize: "24px", color: "green" }}
            />{" "}
            Marketingu i Content-it
          </b>{" "}
          <br />{" "}
          <p className="text-lg mt-2 text-gray-400">
            Maintain Consistent production quality by tracking tool parameters &
            operator performance through historical data.
          </p>
        </p>
      </div>
    </div>
  );
};

export default BannerWithFadingGridBackground;
