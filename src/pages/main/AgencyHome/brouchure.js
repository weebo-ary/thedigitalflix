import React, { useState } from "react";
// import {
//   CheckCircleOutlined,
//   ThunderboltOutlined,
//   ToolOutlined,
//   UpOutlined,
//   DownOutlined,
//   DatabaseOutlined,
//   RightOutlined,
// } from "@ant-design/icons";
import Feature1 from "../../../assets/Images/Feat2.png";
import Feature2 from "../../../assets/Images/Feat1.png";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Modal from "./modal";
import Logo from "../../../assets/Logo/LightLogo.png";

function BrouchureSection() {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={`mx-2 p-5 transition-opacity duration-1000 transform mt-10`} // Apply fade-in and fade-out animation based on visibility state
    >
      <div className="">
        <div className="">
          <h2 className="text-center md:text-center sm:text-start xs:text-start sm:mx-4 xs:mx-3 text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-gray-900 dark:text-white mb-4">
            Experience Cutting-Edge Digital Marketing Solutions
            <span className="text-red-600">AI Powered</span> Digital Marketing
            Solutions
          </h2>
        </div>
        <div className="px-2">
          <p className="text-3xl md:text-3xl sm:text-xl xs:text-xl text-center md:text-center sm:text-start xs:text-start sm:mx-2 text-gray-600 dark:text-gray-400 mb-12">
            Unlock the full potential of your business with our AI-driven
            digital marketing services. From SEO and PPC to social media and
            content marketing, we provide{" "}
            <b>tailored strategies, automation, and data-driven insights</b> to
            maximize your brand's online success. 🚀
          </p>
          <p className="text-3xl md:text-3xl sm:text-xl xs:text-xl text-center md:text-start sm:text-start xs:text-start sm:mx-2 text-gray-600 dark:text-gray-400 mb-12">
            Download Our Brochure Now and explore how TheDigitalFlix can help
            your business grow with:
            <br />
            <br />
            ✅ AI-powered campaign optimization
            <br />
            <br />
            ✅ High-impact lead generation strategies
            <br />
            <br />
            ✅ Performance-driven digital marketing solutions
            <br />
            <br/>
            Take the first step toward digital success with TheDigitalFlix! 🚀
          </p>
        </div>
        <div className="p-6 w-full flex items-center justify-center mb-12 gap-5">
          <img
            src={Feature1}
            alt="Feature1"
            className="md:w-1/5 sm:w-1/3 xs:w-1/3"
            onContextMenu={handleContextMenu}
          />
          <p className="flex items-center justify-center gap-2">
            <ArrowLeftOutlined /> Front
          </p>
          <p className="flex items-center justify-center gap-2">
            Back <ArrowRightOutlined />
          </p>
          <img
            src={Feature2}
            alt="Feature2"
            className="md:w-1/5 sm:w-1/3 xs:w-1/3"
            onContextMenu={handleContextMenu}
          />
        </div>
        <div className="p-6 w-full flex items-center justify-center mb-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="md:w-1/2 sm:w-full xs:w-full bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition"
          >
            Download Brouchure
          </button>

          {/* Reusable Modal */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            imageSrc={Feature1}
            logoSrc={Logo}
            head1="Register For Demo"
            head2="Please enter your details below"
            buttonText="Submit"
          />
        </div>
      </div>
    </div>
  );
}

export default BrouchureSection;
