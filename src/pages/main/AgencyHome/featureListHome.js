import React, { useEffect, useRef, useState } from "react";

import INWS1 from "../../../assets/Images/INWS1.webp";
import INWS2 from "../../../assets/Images/INWS2.webp";
import INWS3 from "../../../assets/Images/INWS3.webp";
import INWS4 from "../../../assets/Images/INWS4.webp";
import INWS5 from "../../../assets/Images/INWS5.webp";
import INWS6 from "../../../assets/Images/INWS6.webp";
import INWS7 from "../../../assets/Images/INWS7.webp";
import INWS8 from "../../../assets/Images/INWS8.webp";
import INWS9 from "../../../assets/Images/INWS9.webp";
import INWS10 from "../../../assets/Images/INWS10.webp";

const features = [
  {
    icon: <img src={INWS1} alt="HealthCare" />,
    title: "Healthcare",
    subtitle: "Enhancing Patient Engagement through Digital Solutions",
    description:
      "We provide tailored digital marketing strategies for healthcare providers, focusing on patient education, appointment scheduling, and online reputation management to improve patient trust and engagement.",
  },
  {
    icon: <img src={INWS2} alt="E-commerce" />,
    title: "E-commerce",
    subtitle: "Driving Online Sales with Targeted and Regulated Marketing",
    description:
      "Our expertise in e-commerce marketing helps online retailers increase traffic, optimize conversion rates, and boost sales through personalized campaigns and effective product positioning.",
  },
  {
    icon: <img src={INWS3} alt="Education" />,
    title: "Education",
    subtitle: "Empowering Educational Institutions in the Digital Age",
    description:
      "We assist schools, colleges, and e-learning platforms in enhancing their online presence, engaging students, and promoting courses through strategic digital marketing efforts.",
  },
  {
    icon: <img src={INWS4} alt="Real Estate" />,
    title: "Real Estate",
    subtitle: "Showcasing Properties to the Right Audience",
    description:
      "Our digital marketing services for real estate professionals focus on virtual tours, targeted advertising, and lead generation to connect buyers with their ideal properties.",
  },
  {
    icon: <img src={INWS5} alt="Hospitality" />,
    title: "Hospitality",
    subtitle: "Attracting Guests with Digital Campaigns",
    description:
      "We help hotels and restaurants enhance their online visibility, manage reviews, and create engaging content to attract and retain guests in a competitive market.",
  },
  {
    icon: <img src={INWS6} alt="Finance" />,
    title: "Finance",
    subtitle: "Building Trust and Credibility in Financial Services",
    description:
      "Our strategies for financial institutions include content marketing, SEO, and social media management to educate clients and establish authority in the financial sector.",
  },
  {
    icon: <img src={INWS7} alt="Retail" />,
    title: "Retail",
    subtitle: "Enhancing In-Store and Online Experiences",
    description:
      "We support retail businesses in integrating digital marketing to drive foot traffic, boost online sales, and improve customer engagement through personalized promotions.",
  },
  {
    icon: <img src={INWS8} alt="Automotive" />,
    title: "Automotive",
    subtitle: "Accelerating Sales with Innovative Marketing",
    description:
      "Our digital solutions for the automotive industry focus on lead generation, customer retention, and showcasing vehicle features to drive sales and brand loyalty.",
  },
  {
    icon: <img src={INWS9} alt="Non-Profit Organizations" />,
    title: "Non-Profit Organizations",
    subtitle: "Amplifying Causes through Digital Outreach",
    description:
      "We assist non-profits in raising awareness, engaging supporters, and increasing donations by leveraging social media, email campaigns, and impactful storytelling.",
  },
  {
    icon: <img src={INWS10} alt="Expanding Horizons" />,
    title: "Expanding Horizons: Serving Diverse Industries",
    subtitle: "Tailored Digital Solutions for Every Business Sector",
    description:
      "Beyond our core industries, we empower businesses across various sectors, including manufacturing, logistics, legal, healthcare, entertainment, and more. Our customized digital marketing strategies ensure enhanced brand visibility, lead generation, and business growth, no matter the industry. Let us help you thrive in the digital era!",
  },
];

// Reusable Feature Item component
const FeatureItem = ({ icon, title, subtitle, description, isVisible }) => (
  <div
    className={`flex flex-col items-center justify-center transition-transform duration-700 ease-in-out transform ${
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
    }`}
  >
    <div className="flex justify-center items-center mb- w-3/4">{icon}</div>
    <h2 className="text-xl text-center font-semibold mb-2 mt-4">{title}</h2>
    <h2 className="text-lg text-center font-light border-b mb-2 pb-2">
      {subtitle}
    </h2>
    <p className="text-sm text-center text-gray-600 dark:text-gray-300">
      {description}
    </p>
  </div>
);

function FeatureList() {
  const featureRefs = useRef([]);
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          setVisibleFeatures((prevVisible) => {
            const updatedVisible = [...prevVisible];
            updatedVisible[index] = entry.isIntersecting;
            return updatedVisible;
          });
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the item is visible
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  }, []);

  return (
    <div className="border-t-2 border-b-2 border-white ">
      <h2 className="text-5xl sm:text-2xl xs:text-2xl font-bold text-red-600 mt-10 dark:text-red-500 text-center mb-10">
        Industries we Serve
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-20 p-8 w-full mb-10">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (featureRefs.current[index] = el)}
            data-index={index}  
          >
            <FeatureItem
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              isVisible={visibleFeatures[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureList;
