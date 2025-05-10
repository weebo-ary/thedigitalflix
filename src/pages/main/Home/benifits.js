import { ArrowRightOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import IllustrationLight from "../../../assets/Images/CertOfComp.png";
import IllustrationTwo from "../../../assets/Images/lor.png";
import IllustrationThree from "../../../assets/Images/res.png";
import IllustrationFour from "../../../assets/Images/Screenshot 2025-03-05 155001.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Feature1 from "../../../assets/Images/Feat2.png";
import Logo from "../../../assets/Logo/LightLogo.png";
import Modal from "./modal";

function Banner() {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === leftSectionRef.current) {
            setIsLeftVisible(true);
          } else if (entry.target === rightSectionRef.current) {
            setIsRightVisible(true);
          }
        }
      });
    }, observerOptions);

    if (leftSectionRef.current) {
      observer.observe(leftSectionRef.current);
    }

    if (rightSectionRef.current) {
      observer.observe(rightSectionRef.current);
    }
  }, []);

  return (
    <div className="mx-0 lg:mx-0 md:mx-0 sm:mx-0 xs:mx-0 lg:mb-0 lg:mt-10 xs:mt-0 flex flex-row md:flex-row items-start justify-start sm:flex-col xs:flex-col overflow-hidden p-5 md:gap-10">
      <h2 className="hidden">
        {isLeftVisible} {isRightVisible}
      </h2>
      <Carousel
        className="relative w-full cursor-pointer "
        showArrows={true}
        showStatus={false}
        autoPlay
        stopOnHover
        infiniteLoop
        interval={2500}
        showThumbs={false}
      >
        <div className="flex md:flex-row-reverse sm:flex-col-reverse xs:flex-col-reverse items-center justify-start text-start w-full h-full gap-6 mb-10 p-4 pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full">
            <h1 className="md:text-5xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
            Çertifikata e Përfundimit – TheDigitalFlix 🏅
            </h1>
            <p className="md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
            Merrni certifikatën e përfundimit të kursit tuaj nga The Digital Flix, e cila vërteton ekspertizën tuaj në kursin që ju zgjodhet.
            </p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition"
              >
                Mëso me shumë <ArrowRightOutlined className="ml-2" />
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src={IllustrationLight}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex md:flex-row-reverse sm:flex-col-reverse xs:flex-col-reverse items-center justify-start text-start w-full h-full p-4 pl-6 pr-6">
          <div className="flex flex-col mb-10 p-4 w-full">
            <h2 className="md:text-5xl sm:text-2xl xs:text-2xl  font-bold text-white mb-4 mt-4">
            Letër rekomandimi 🏆
            </h2>
            <p className="md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
            Merrni një letër rekomandimi të personalizuar nga TheDigitalFlix, për ti shtuar besueshmëri profilit tuaj.
            </p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition"
              >
                Mëso me shumë <ArrowRightOutlined className="ml-2" />
              </button>
            </div>
          </div>

          <div className="w-1/2">
            <img
              src={IllustrationTwo}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex md:flex-row-reverse sm:flex-col-reverse xs:flex-col-reverse items-center justify-start text-start w-full h-full pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full p-4">
            <h2 className="md:text-5xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              FlixPro Resume 📄
            </h2>
            <p className="md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
            Merrni një CV të përgatitur në mënyrë profesionale, e gatshme për tju gjetur punë, e përshtatur për fushën tuaj dhe optimizuar për tu vënë në dukje tek rekrutuesit.
            </p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition"
              >
                Learn More <ArrowRightOutlined className="ml-2" />
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src={IllustrationThree}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex md:flex-row-reverse sm:flex-col-reverse xs:flex-col-reverse items-center justify-start text-start w-full h-full pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full p-4">
            <h2 className="md:text-5xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
            Portofoli Dixhital (On Showcase) 🎨
            </h2>
            <p className="md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
            Krijoni një portofol profesional për të shfaqur aftësitë tuaja dixhitale dhe projektet te klientet dhe punëdhënësit e ndryshëm.
            </p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition"
              >
                Mëso me shumë <ArrowRightOutlined className="ml-2" />
              </button>
            </div>
          </div>
          <div className="w-full">
            <img
              src={IllustrationFour}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </Carousel>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={Feature1} // Change with your image URL
        logoSrc={Logo} // Change with your logo URL
        head1="Welcome to Our Platform"
        head2="Please enter your details below"
        buttonText="Submit"
      />
    </div>
  );
}

export default Banner;
