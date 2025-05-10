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
          Ju prezantojmë programet më të avancuara me 
            <span className="text-red-600">Inteligjencë Artificiale </span> në Marketingun Dixhital
          </h2>
        </div>
        <div className="px-2">
          <p className="text-3xl md:text-3xl sm:text-xl xs:text-xl text-center md:text-center sm:text-start xs:text-start sm:mx-2 text-gray-600 dark:text-gray-400 mb-12">
          Zbuloni të gjitha detajet për kurset tona, certifikimet, mundësitë për karrierë dhe përfitimet ekskluzive në një vend. Shkarkoni broshurën tani dhe merrni hapin e pare drejt suksesit tuaj dixhital! 🚀
          </p>
        </div>
        <div className="p-6 w-full flex items-center justify-center mb-12 gap-5">
          <img src={Feature1} alt="Feature1" className="md:w-1/5 sm:w-1/3 xs:w-1/3" onContextMenu={handleContextMenu} />
          <p className="flex items-center justify-center gap-2"><ArrowLeftOutlined /> Front</p>
          <p className="flex items-center justify-center gap-2">Back <ArrowRightOutlined /></p>
          <img src={Feature2} alt="Feature2" className="md:w-1/5 sm:w-1/3 xs:w-1/3" onContextMenu={handleContextMenu}/>
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
