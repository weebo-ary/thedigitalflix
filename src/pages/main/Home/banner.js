import { ArrowRightOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import IllustrationTwo from "../../../assets/Images/TheDigitalFlix WEBSITE DEVELOPMENT PPC SEO.jpg";
import IllustrationThree from "../../../assets/Images/TheDigitalFlix ONLINE AND OFFLINE CLASSES GET SCHOLARSHIPS  JOB OPPORTUNITIES and CERTIFICATIONS.jpg";
import IllustrationFive from "../../../assets/Images/TheDigitalFlix GET JOBS IN DIGITAL MARKETING BECOME A FREELANCER START YOUR OWN AGENCY.jpg";
import VideoBanner from "../../../assets/Video/Banner.mp4";
import { Link } from "react-router-dom";
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
    <div className="mx-0 lg:mx-0 md:mx-0 sm:mx-0 xs:mx-0 lg:mb-0 lg:mt-10 xs:mt-0 lg:min-h-screen md:h-min-h-screen sm:min-h-screen xs:min-h-screen  flex flex-row md:flex-row items-start justify-start sm:flex-col xs:flex-col overflow-hidden p-5 md:gap-10">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full min-h-screen md:min-h-screen sm:h-auto xs:h-130 object-cover opacity-90 dark:opacity-30 z-0"
      >
        <source src={VideoBanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className="hidden">
        {isLeftVisible} {isRightVisible}
      </h2>
      <Carousel
        className="relative w-full cursor-pointer -mt-20 z-0"
        showArrows={true}
        showStatus={false}
        autoPlay
        stopOnHover
        infiniteLoop
        interval={7500}
        showThumbs={false}
        swipeable={false}
      >
        <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse items-center justify-start text-start w-full h-full gap-6 mb-10 p-4 pl-6 pr-6">
          <div className="flex flex-col mb-2 w-full">
            <p>
            MËSIM ONLINE{" "}
              <a
                href="https://linktr.ee/thedigitalflix.al"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-red-500">@thedigitalflix.al</span>
              </a>
            </p>
            <h1 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-0 mt-4">
              KURS PËR{" "}
              <span className="text-red-600">MARKETING DIXHITAL</span>
            </h1>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              Instituti TheDigitalFlix ofron kurse të avancuara në marketingun dixhital, të mbështetura nga Inteligjenca Artificiale, për të përgatitur pjesëmarrësit me aftësi të kërkuara si SEO, PPC dhe menaxhimi i rrjeteve sociale. Qëllimi është t’i ndihmojë ata të dallohen në tregun dixhital përmes strategjive moderne dhe teknologjisë së fundit.
            </p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition"
              >
                Regjistrohu tani
              </button>
              <Link to="/contact-us">
                <button className="text-gray-300 transition duration-100 ease-in-out hover:text-white font-semibold py-2 px-4 rounded-lg">
                  Mëso më shumë <ArrowRightOutlined className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <img
              src={IllustrationFive}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse items-center justify-start text-start w-full h-full p-4 pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full">
            <p>
              MËSIM ONLINE{" "}
              <a
                href="https://linktr.ee/thedigitalflix.al"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-red-500">@thedigitalflix.al</span>
              </a>
            </p>
            <h2 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              <span className="text-red-600">MUNDËSI</span> PUNE & ÇERTIFIKIME
            </h2>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              Ne ofrojmë mësimin online si një nga opsionet më fleksibël të
              kohës së sotme. Përfitoni ulje, qasje në pozicione pune me paga të
              larta dhe merrni çertifikime të njohura ndërkombëtarisht për tu
              rritur në karrierën tuaj. Bashkohuni me një komunitet aktiv
              studentësh dhe profesionistësh, dhe hidhni hapin e radhës drejt
              suksesit tuaj dixhital. ects and industry-recognized
              certifications.
            </p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition"
              >
                Regjistrohu tani
              </button>

              <Link to="/contact-us">
                <button className="text-gray-300 transition duration-100 ease-in-out hover:text-white font-semibold py-2 px-4 rounded-lg">
                  Mëso më shumë <ArrowRightOutlined className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full">
            <img
              src={IllustrationTwo}
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse xs:mt-7 items-center justify-start text-start w-full h-full pl-6 pr-6">
          <div className="flex flex-col mb-10 w-full p-4">
            <p>PUNO NË MARKETING DIXHITAL</p>
            <h2 className="text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold text-white mb-4 mt-4">
              BËHU FREELANCER OSE NIS AGJENSINË TËNDE{" "}
              <span className="text-red-600">DIXHITALE</span>
            </h2>
            <p className="text-xl md:text-xl sm:text-sm xs:text-sm font-semibold text-white mb-8">
              <b>TheDigitalFlix</b> ju pajis me aftësitë më të kërkuara të
              momentit në fushën e marketingut dixhital, të cilat ju sigurojnë
              punë me paga të larta, punësim si freelancer dhe mundësinë për të
              ndërtuar agjencinë tuaj të suksesshme. Mësoni nga ekspertët tanë
              të industrisë, përfitoni përvojë praktike dhe hapni rrugë të
              pafundme karriere në botën dixhitale.
            </p>
            <div className="flex flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition"
              >
                Regjistrohu tani
              </button>
              <Link to="/contact-us">
                <button className="text-gray-300 transition duration-100 ease-in-out hover:text-white font-semibold py-2 px-4 rounded-lg">
                  Mëso më shumë <ArrowRightOutlined className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <img
              src={IllustrationThree}
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
