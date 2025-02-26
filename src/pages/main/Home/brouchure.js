import React, { useState, useRef, useEffect } from "react";
// import {
//   CheckCircleOutlined,
//   ThunderboltOutlined,
//   ToolOutlined,
//   UpOutlined,
//   DownOutlined,
//   DatabaseOutlined,
//   RightOutlined,
// } from "@ant-design/icons";
import FeatureImage from "../../../assets/Images/Feat2.jpg";
import FeatureImage2 from "../../../assets/Images/feat1.jpg";
// import { Link } from "react-router-dom";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";

function BrouchureSection() {
    const [isFlipped, setIsFlipped] = useState(false);

//   const features = [
//     {
//       title: "Performance Monitoring",
//       description:
//         "Continuous Monitoring and Immediate Data Analysis for Real-time Insights.",
//       icon: <CheckCircleOutlined />,
//       viewMoreData: "/performance-monitoring",
//     },
//     {
//       title: "Predictive Analytics",
//       description:
//         "Unlock the Future with Predictive Analytics: Where Data Meets Destiny.",
//       icon: <ThunderboltOutlined />,
//       viewMoreData: "/predictive-analytics",
//     },
//     {
//       title: "Customised Solutions",
//       description: "Your Vision, Our Precision: Custom Solutions Redefined!",
//       icon: <DatabaseOutlined />,
//       viewMoreData: "/customised-solutions",
//     },
//     {
//       title: "Incident Assistant",
//       description:
//         "Empower your teams to efficiently resolve incidents by providing insights and solutions based on system data.",
//       icon: <ToolOutlined />,
//       viewMoreData: "/incident-assistant",
//     },
//   ];
//   const [expandedIndex, setExpandedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Visibility state for on-scroll animation

  const sectionRef = useRef(null);

//   const toggleExpand = (index) => {
//     setExpandedIndex(expandedIndex === index ? -1 : index);
//   };

//   const handleViewMore = (event, viewMoreData) => {
//     event.stopPropagation();
//     console.log("Navigating to:", viewMoreData);
//   };

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Fade in when the section is visible
        } else {
          setIsVisible(false); // Fade out when the section is not visible
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`mx-2 p-5 transition-opacity duration-1000 transform mt-20 -mb-20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`} // Apply fade-in and fade-out animation based on visibility state
    >
      <div className="">
        <div className="">
          <h2 className="text-center md:text-center sm:text-start xs:text-start sm:mx-4 xs:mx-3 text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-gray-900 dark:text-white mb-4">
            Presenting the most advnace <span className="text-red-600">AI Powered</span> programs in Digital Marketing
            </h2>
        </div>
        <div className="px-2">
          <p className="text-3xl md:text-3xl sm:text-xl xs:text-xl text-center md:text-center sm:text-start xs:text-start sm:mx-2 text-gray-600 dark:text-gray-400 mb-12">
            Unlock all the details about our AI-powered digital marketing
            courses, certifications, career opportunities, and exclusive
            benefits in one place. Download the brochure now and take the first
            step toward your digital success! 🚀
          </p>
        </div>
      </div>
      <div className="flex flex-row md:flex-row-reverse sm:flex-col xs:flex-col items-center justify-center gap-10 md:gap-10 sm:gap-10">
      <div className="w-1/2 h-100" style={{ perspective: "1000px" }}>
        {/* Card Inner */}
        <div
          className="relative w-full h-full -ml-20 transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full rounded-xl overflow-hidden shadow-lg"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <img src={FeatureImage} alt="Front" className="w-full h-full object-cover" />
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full rounded-xl overflow-hidden shadow-lg bg-white"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <img src={FeatureImage2} alt="Back" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Flip Button */}
      <button
        onClick={() => setIsFlipped(!isFlipped)}
        className="absolute -mt-32 -ml-44 px-6 py-2 text-3xl text-white font-bold rounded-lg hover:bg-red-700 transition"
      >
        <MdOutlineFlipCameraAndroid />
      </button>
        <div className="w-1/2 md:w-1/2 sm:w-full xs:w-full flex flex-col gap-2 ">
        <button className="bg-red-600 px-4 py-6 w-1/2 -mt-24 rounded-lg ml-20 shadow-md">Download Brouchure</button>
        </div>
      </div>
    </div>
  );
}

export default BrouchureSection;
