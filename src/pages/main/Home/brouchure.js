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
import Feature1 from "../../../assets/Images/Feat2.jpg";
import Feature2 from "../../../assets/Images/feat1.jpg";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Modal from "./modal";
import Logo from "../../../assets/Logo/LightLogo.png"

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
            Presenting the most advnace{" "}
            <span className="text-red-600">AI Powered</span> programs in Digital
            Marketing
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
        <div className="p-6 w-full flex items-center justify-center mb-12 gap-5">
          <img src={Feature1} alt="Feature1" className="w-1/5" onContextMenu={handleContextMenu} />
          <p><ArrowLeftOutlined /> Front</p>
          <p>Back <ArrowRightOutlined /></p>
          <img src={Feature2} alt="Feature2" className="w-1/5" onContextMenu={handleContextMenu}/>
        </div>
        <div className="p-6 w-full flex items-center justify-center mb-12">
        <button
        onClick={() => setIsModalOpen(true)}
        className="w-1/2 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition"
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
