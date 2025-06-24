import React from "react";
import Tr3 from "../../assets/Illustration/tr3.png";
import Tr4 from "../../assets/Illustration/tr4.png";
import Tr5 from "../../assets/Illustration/tr5.png";
import Tr6 from "../../assets/Illustration/tr6.png";
import Tr7 from "../../assets/Illustration/74.png";
import Tr9 from "../../assets/Illustration/tr9.png";
import Tr10 from "../../assets/Illustration/75.png";
import Tr11 from "../../assets/Illustration/76.png";
import Tr12 from "../../assets/Illustration/77.png";
import Tr13 from "../../assets/Illustration/78.png";
import Tr14 from "../../assets/Illustration/79.png";
import Tr15 from "../../assets/Illustration/80.png";
import Tr16 from "../../assets/Illustration/81.png";
import Tr17 from "../../assets/Illustration/82.png";
import { Link } from "react-router-dom";

function TrainingIndustry40() {
  const sections = [
    {
      link: "/flixstart-digital",
      title: "Industrial Automation",
      points: [
        {
          link: "/flixstart-digital",
          image: Tr3, // Replace with your actual image import or URL
          price: "€450",
          description: "FlixStart Digital",
        },
        {
          link: "/flixelite-digital-pro",
          image: Tr4, // Replace with your actual image import or URL
          price: "€600",
          description: "FlixStart Digital Pro",
        },
        {
          link: "/flixyoung-digital-creators",
          image: Tr5, // Replace with your actual image import or URL
          price: "€200",
          description: "FlixYoung Digital Creators",
        },
        {
          link: "/flixbuild-web",
          image: Tr6, // Replace with your actual image import or URL
          price: "€450",
          description: "FlixBuild Web",
        },
        {
          link: "/flix-adv-english",

          image: Tr9, // Replace with your actual image import or URL
          price: "€300",
          description: "Flix Advance English",
        },

        {
          link: "/flix-seo",

          image: Tr11, // Replace with your actual image import or URL
          price: "€100",
          description: "Flix SEO",
        },
        {
          link: "/flix-javascript",

          image: Tr7, // Replace with your actual image import or URL
          price: "€650",

          description: "Flix Javascript",
        },
        {
          link: "/flix-ai",

          image: Tr10, // Replace with your actual image import or URL
          price: "€150",
          description: "Flix AI Marketing",
        },

        {
          link: "/flix-email-sms",

          image: Tr14, // Replace with your actual image import or URL
          price: "€50",
          description: "Flix Email Marketing",
        },
        {
          link: "/flix-email-sms",

          image: Tr13, // Replace with your actual image import or URL
          price: "€100",
          description: "Flix SMS Marketing",
        },

        {
          link: "/flixstart-ecommerce",

          image: Tr15, // Replace with your actual image import or URL
          price: "€50",
          description: "Flix E-Commerce Marekting",
        },

        {
          link: "/flix-mark-auto",

          image: Tr12, // Replace with your actual image import or URL
          price: "€150",
          description: "Flix Marketing Automation",
        },
        {
          link: "/flix-dropship-affiliate-marketing",

          image: Tr17, // Replace with your actual image import or URL
          price: "€50",
          description: "Flix Dropshipping & Affiliate Marketing",
        },
        {
          link: "/flix-ppc",

          image: Tr16, // Replace with your actual image import or URL
          price: "€100",
          description: "Flix Google Ads (PPC)",
        },
      ],
    },
  ];

  return (
    <div className="h-auto bg-white dark:bg-gray-800 flex flex-col items-center justify-center p-4 transition mb-10">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-6xl transition">
        <h1 className="text-6xl md:text-5xl sm:text-2xl xs:text-2xl text-start font-bold mb-5 text-gray-800 dark:text-gray-100 py-10 border-b-2">
          Cmimet dhe kurset :
        </h1>

        <div className="space-y-6">
          {/* Mapping through each section */}
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* Section Title */}
              {/* <h2 className="text-3xl xs:text-2xl text-start font-bold text-gray-700 dark:text-gray-100 mb-4">
                {section.title}
              </h2> */}

              {/* Cards for each point */}

              <div className="grid md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4">
                {section.points.map((point, index) => (
                  <Link to={point.link} key={index}>
                    <div className="p-4 bg-white flex flex-col items-center justify-center mt-10 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer dark:bg-gray-700 rounded-lg text-center shadow-lg">
                      <img
                        src={point.image}
                        alt={point.title}
                        className="w-36 border-b py-6"
                      />
                      <p className="text-gray-700 text-5xl font-bold py-3 dark:text-gray-300">
                        {point.price}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {point.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrainingIndustry40;
