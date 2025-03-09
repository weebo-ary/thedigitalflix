import React, { useEffect, useState, useRef } from "react";

const BannerWithFadingGridBackground = () => {
  // Array to create 64 grid items (8x8 grid)
  const gridItems = Array.from({ length: 60 });

  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const textRef = useRef(null);
  const imageRef = useRef(null);

  // IntersectionObserver to observe text and image
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // 20% visibility threshold
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
  }, []);

  return (
    <div className="relative min-h-screen flex md:flex-col md:gap-10 sm:flex-col xs:flex-col justify-center items-center text-start md:text-center xs:text-center sm:text-center p-8">
      {/* Grid Background with Fading Effect */}
      <div className="hidden">{isImageVisible}</div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className="grid md:grid grid-cols-8 grid-rows-8 md:grid-cols-8 md:grid-rows-8 sm:grid-cols-4 sm:grid-rows-4 xs:grid-cols-4 xs:grid-rows-4 w-full h-full gap-0 opacity-10 dark:opacity-10"
          style={{
            maskImage: "linear-gradient(to bottom, black 30%, transparent 70%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 30%, transparent 70%)",
          }}
        >
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border border-black dark:border-gray-400"
            ></div>
          ))}
        </div>
      </div>

      {/* Banner Content */}
      <div
        ref={textRef}
        className={`relative md:mt-10 md:mb-0 px-4 md:px-0 transition-transform duration-1000 ease-in-out ${
          isTextVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-20"
        }`}
      >
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-100 mb-20 md:text-center xs:text-start sm:text-start">
          <span className="bg-white dark:bg-gray-700 border-2 dark:border-gray-500 p-2 rounded-lg">
            Course #1 FlixStart Digital
          </span>
        </p>
        <h1 className="text-6xl md:text-5xl sm:text-3xl xs:text-3xl md:text-center xs:text-start sm:text-start font-bold text-gray-800 dark:text-gray-100 mb-10">
          <b>FlixStart Digital</b> <br />
          Best{" "}
          <span className="text-red-600 animate-pulse">
            Digital Marketing Course
          </span>{" "}
          For Student, Entreprenaurs, Working Professionals etc.
        </h1>
      </div>
      <div className="flex md:flex-row-reverse xs:flex-col-reverse sm:flex-col items-center justify-center gap-10">
        <div className="md:w-1/3 sm:w-full xs:w-full flex flex-col md:flex-col sm:flex-row xs:flex-row justify-start items-center md:items-start md:justify-center space-y-4 md:space-y-0 md:space-x-4 md:gap-10 sm:gap-2 xs:gap-2">
          <p className="sm:text-start xs:text-start text-base md:text-4xl text-gray-800 dark:text-white mb-10 sm:mb-0 xs:mb-0">
            Discover More About FlixYoung Digital Creators
          </p>
        </div>
        <div>
          <iframe
            width="720"
            height="480"
            src="https://www.youtube.com/embed/It9ApbDK41U?start=3"
            title="Flix Start Digital"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BannerWithFadingGridBackground;
