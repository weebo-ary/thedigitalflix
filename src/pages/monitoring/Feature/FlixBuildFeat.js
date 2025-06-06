import React, { useEffect, useRef, useState } from "react";
import Im1 from "../../../assets/Images/FD1.jpg";
import Im2 from "../../../assets/Images/FD2.jpg";
import Im3 from "../../../assets/Images/FD3.jpg";
import Im5 from "../../../assets/Images/FD4.jpg";
import Im6 from "../../../assets/Images/FD5.jpg";
import Im7 from "../../../assets/Images/FD6.jpg";
import Im4 from "../../../assets/Images/featuresCourses.jpg";

function Solution() {
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
      image: Im1,
      title: "Kurrikulë e përshtatshme për fillestarë",
      description: "Nuk kërkohet njohuri paraprake në kodim — mëso nga e para.",
    },
    {
      image: Im2,
      title: "Zhvillim Faqe Uebi me ndihmën e Inteligjencës Artificiale",
      description: "Shfrytëzo mjetet e inteligjencës artificiale për të përshpejtuar kodimin dhe ndërtimin e faqeve.",
    },
    {
      image: Im3,
      title: "Mjeshtëri në Frontend dhe Backend",
      description: "Mëso HTML, CSS, JavaScript, React, Node.js dhe më shumë.",
    },

    {
      image: Im5,
      title: "Projekte reale dhe punim final (capstone)",
      description: "Ndërto faqe interneti, landing pages dhe aplikacione uebi sipas kërkesave reale të tregut.",
    },

    {
      image: Im6,
      title: "Certifikime të Industris  100% Falas",
      description:
        " Merr certifikata të njohura nga platforma si FreeCodeCamp, Microsoft e të tjera.",
    },

    {
      image: Im7,
      title: "Mundësi fleksibile mësimi",
      description: "Mesim online.",
    },
  ];

  return (
    <div className="relative h-auto flex flex-col justify-center items-center text-start md:text-center p-8 ">
      <img
        src={Im4}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 liopacity-30 opacity-50 dark:opacity-20 "
      />
      <div className="text-center md:text-center sm:text-start xs:text-start mb-10">
        <h2 className="text-6xl md:text-6xl sm:text-4xl xs:text-4xl p-8">
        6 Karakteristikat{" "}
          <span className="relative inline-block">
          kryesore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1213 73"
              fill="#E50914"
            >
              <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path>
            </svg>
          </span>
        </h2>
        {/* <p className="text-2xl md:text-2xl sm:text-xl xs:text-xl p-8">
            Improve your shop-floor productivity through real-time CNC & Assembly
            Line Monitoring
          </p> */}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 max-w-6xl gap-10 mb-20">
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
            <img
              src={card.image}
              alt={card.title}
              className="w-96 h-auto rounded-xl md:mb-10"
            />
            <h2 className="text-2xl font-semibold text-center mb-4">
              {card.title}
            </h2>
            <h2 className="text-lg text-gray-500 dark:text-gray-300 text-center md:mb-5">
              {card.description}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solution;