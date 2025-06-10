import React from "react";
import Tr3 from "../../assets/Illustration/tr3.png";
import Tr4 from "../../assets/Illustration/tr4.png";
import Tr5 from "../../assets/Illustration/tr5.png";
import Tr6 from "../../assets/Illustration/tr6.png";
import Tr7 from "../../assets/Illustration/74.png";
import Tr9 from "../../assets/Illustration/tr9.png";


function TrainingIndustry40() {
  const sections = [
    {
      title: "Industrial Automation",
      points: [
        {
          image: Tr3, // Replace with your actual image import or URL
          price: "$100",
          description: "FlixStart Digital",
        },
        {
          image: Tr4, // Replace with your actual image import or URL
          price: "$100",
          description: "FlixStart Digital Pro",
        },
        {
          image: Tr5, // Replace with your actual image import or URL
          price: "$100",
          description: "FlixYoung Digital Creators",
        },
        {
          image: Tr6, // Replace with your actual image import or URL
          price: "$100",
          description: "FlixBuild Web",
        },
        {
          image: Tr7, // Replace with your actual image import or URL
          price: "$100",
          
          description: "Flix Javascript",
        },
        {
            image: Tr9, // Replace with your actual image import or URL
          price: "$100",
            description: "Flix Advance English",
          },
          {
          image: Tr7, // Replace with your actual image import or URL
          price: "$100",
          description: "Flix AI Marketing",
        },
        {
          image: Tr7, // Replace with your actual image import or URL
          price: "$100",
          description: "Flix SEO",
        },
        {
          image: Tr7, // Replace with your actual image import or URL
          price: "$100",
          description: "Flix Marketing Automation",
        },
        {
          image: Tr7, // Replace with your actual image import or URL
          price: "$100",
          description: "Flix Email & SMS Marketing",
        },
        {
          image: Tr7, // Replace with your actual image import or URL
          price: "$100",
          description: "Flix E-Commerce Marekting",
        },
        {
          image: Tr7, // Replace with your actual image import or URL
          price: "$100",
          description: "Flix Google Ads (PPC)",
        },
        {
          image: Tr7, // Replace with your actual image import or URL
          price: "$100",
          description: "Flix Dropshipping & Affiliate Marketing",
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
                  <div
                    key={index}
                    className="p-4 bg-white  flex flex-col items-center justify-center mt-10 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer dark:bg-gray-700 rounded-lg text-center shadow-lg"
                  >
                    {/* <img src={point.image} alt={point.title} className="w-64 border-b mb-10" /> */}
                    <p className="text-gray-700 dark:text-gray-300">{point.price}</p>
                    <p className="text-gray-700 dark:text-gray-300">{point.description}</p>
                  </div>
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
