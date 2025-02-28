import React, { useEffect, useRef, useState } from "react";

import { AiOutlineBulb, AiOutlineClockCircle, AiOutlineCodeSandbox, AiOutlineFacebook, AiOutlineGift, AiOutlineGlobal, AiOutlineLineChart, AiOutlineTeam } from "react-icons/ai";
import { BiBookContent, BiBookOpen, BiGift } from "react-icons/bi";
import { MdLocationOn, MdOndemandVideo, MdOutlineCastForEducation, MdPayments, MdWorkOutline, MdWorkspacePremium } from "react-icons/md";
import { GiArtificialIntelligence, GiSkills } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { RiGuideFill } from "react-icons/ri";

const features = [
  
    {
        icon: <AiOutlineClockCircle style={{ fontSize: "3rem" }} />,
        title: "Course Duration",
        description: "3 Months of Intensive Learning",
      },
      {
        icon: <BiBookContent style={{ fontSize: "3rem" }} />,
        title: "Total Modules",
        description: "50+ Industry-Focused Modules",
      },
      {
        icon: <MdOutlineCastForEducation style={{ fontSize: "3rem" }} />,
        title: "Online / Offline Learning",
        description: "Flexible learning – Join Online or Offline",
      },
      {
        icon: <MdWorkspacePremium style={{ fontSize: "3rem" }} />,
        title: "Certifications",
        description: "20+ Recognized Certifications (Google, HubSpot, etc.)",
      },
      {
        icon: <MdWorkOutline style={{ fontSize: "3rem" }} />,
        title: "Placement Assistance",
        description: "100% Job & Freelance Support",
      },
      {
        icon: <GiSkills style={{ fontSize: "3rem" }} />,
        title: "Practical Training",
        description: "Work on Real-World Projects & Live Campaigns",
      },
      {
        icon: <GiArtificialIntelligence style={{ fontSize: "3rem" }} />,
        title: "AI in Digital Marketing",
        description: "Master AI tools for automation & smarter marketing",
      },
      {
        icon: <AiOutlineFacebook style={{ fontSize: "3rem" }} />,
        title: "Paid Ads & Social Media",
        description: "Google & Meta Ads, Facebook & Instagram Marketing",
      },
      {
        icon: <AiOutlineCodeSandbox style={{ fontSize: "3rem" }} />,
        title: "Website Development",
        description: "Learn WordPress, Hosting & SEO",
      },
      {
        icon: <AiOutlineLineChart style={{ fontSize: "3rem" }} />,
        title: "Data Analytics",
        description: "Track & optimize marketing campaigns",
      },
      {
        icon: <MdPayments style={{ fontSize: "3rem" }} />,
        title: "Installment Plans",
        description: "Flexible Payment & EMI Options",
      },
      {
        icon: <AiOutlineGift style={{ fontSize: "3rem" }} />,
        title: "Scholarships",
        description: "Scholarship opportunities for eligible students",
      },
      {
        icon: <BiGift style={{ fontSize: "3rem" }} />,
        title: "Bonuses & Discounts",
        description: "Special offers & early bird discounts",
      },
      {
        icon: <BiBookOpen style={{ fontSize: "3rem" }} />,
        title: "Course Material",
        description: "Comprehensive study guides & handbooks",
      },
      {
        icon: <PiStudent style={{ fontSize: "3rem" }} />,
        title: "LMS Access",
        description: "24/7 access to TheDigitalFlix LMS (Flix Elevate)",
      },
      {
        icon: <AiOutlineBulb style={{ fontSize: "3rem" }} />,
        title: "Doubt-Solving & Mentoring",
        description: "One-on-one mentorship & doubt-clearing sessions",
      },
      {
        icon: <MdOndemandVideo style={{ fontSize: "3rem" }} />,
        title: "Recorded Sessions",
        description: "Missed a class? Watch recordings anytime",
      },
      {
        icon: <AiOutlineGlobal style={{ fontSize: "3rem" }} />,
        title: "Business & Freelancing",
        description: "Learn how to start your own digital agency",
      },
      {
        icon: <MdLocationOn style={{ fontSize: "3rem" }} />,
        title: "Prime Location",
        description: "Located in Bhopal, easily accessible",
      },
      {
        icon: <AiOutlineTeam style={{ fontSize: "3rem" }} />,
        title: "Networking & Alumni",
        description: "Exclusive access to digital marketing networks",
      },
      {
        icon: <RiGuideFill style={{ fontSize: "3rem" }} />,
        title: "Support",
        description: "Individual Lifetime Guidance",
      },

];

// Reusable Feature Item component
const FeatureItem = ({ icon, title, description, isVisible }) => (
  <div
    className={`text-center transition-transform duration-700 ease-in-out transform ${
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
    }`}
  >
     <div className="flex justify-center items-center mb-2">
      {icon}
    </div>
    <h2 className="text-xl font-semibold border-b mb-2">{title}</h2>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
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
    <h2 className="text-5xl font-bold text-red-600 mt-10 dark:text-red-500 text-center mb-10">
        Everything you Need to Know
    </h2>
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-20 p-8 w-full mb-10">
      {features.map((feature, index) => (
        <div
          key={index}
          ref={(el) => (featureRefs.current[index] = el)}
          data-index={index}
        >
          <FeatureItem
            icon={feature.icon}
            title={feature.title}
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