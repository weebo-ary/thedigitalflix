import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import React, { useEffect, useState, useRef } from "react";
import Logo from "../../../assets/Logo/DarkLogo.png";
import OfferingBg from "../../../assets/Images/marvin-meyer-SYTO3xs06fU-unsplash.jpg"; // Import the background image

const OfferingSection = () => {
  const blobsData = [
    {
      title: "Trajnim Marketingu Dixhital me integrim të Inteligjencës Artificiale 🤖",
      description: "Mungesa e integrimit të inteligjencës artificiale ose kurrikul e vjetër.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Certifikime të njohura nga industria 🎓",
      description:
        "20+ çertifikata nga Google, HubSpot, SEMrush dhe TheDigitalFlix.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Trajnim aktual dhe praktik 🛠",
      description: "Kryesisht teori, pa praktikë nga bota reale.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Guide karriere të personalizuar dhe mundësi praktike",
      description: "Nuk garantohet guida e personalizuar e karries apo mundësia për praktikë.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Akses në LMS (Flix Elevate)",
      description: "Nuk ka LMS ose qasje të kufizuar në materiale studimi",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Trajnim për Biznes dhe Freelancing 💰",
      description: "Mungesë e trajnimit për biznes dhe freelancing.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Zotërim i Google Ads, SEO & Rrjeteve Sociale 📈",
      description:
        "Trajnim bazë pa strategji të avancuara reklamimi me pagesë.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Installment & Scholarship Options 💳",
      description: "No financial assistance options.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Mentorim Personal dhe Udhëzim Karriere 🎤",
      description: "Nuk ka mentorim personal, vetëm klasa të përgjithshme.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Networking & Alumni 🌍",
      description: " Mungesë networku apo i benefiteve nga grupi i të diplomuarit .",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
  ];

  const blobsDataTwo = [
    {
      title: "Trajnim për Marketing Dixhital me mbështetje të Inteligjencës Artificiale 🤖",
      description:
        "Po, ne ju mësojmë marketingun, automatizimin dhe mjetet e inteligjencës artificiale si ChatGPT, Jasper dhe AI ​​Analytics..",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Certifikime të njohura nga industria 🎓",
      description: "Çertifikime të kufizuara ose jo certifikata zyrtare.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Trajnim praktik në terren 🛠",
      description: "Projekte aktuale, studime të rasteve dhe simulime të botës reale.",
      color: "#9FD2C7",

      icon: <CheckCircleOutlined />,
    },
    {
      title: "Guidë karriere e personalizuar dhe mundësi praktike  💼",
      description:
        "Mbështetje 100% për punësim + oferta për praktikë pune për studentët më të mirë.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Akses LMS (Flix Elevate) 📚",
      description:
        "Qasje pa limit në leksione të regjistruara, materiale studimore dhe paketa veglash mësimore.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Trajnim për Business & Freelancing 💰",
      description:
        "Mësoni si të filloni agjensinë tuaj dixhitale, të keni klientë dhe të gjeneroni të ardhura si një profesionist i pavarur freelance.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Google Ads, SEO dhe mjeshtëri e rrjeteve sociale ",
      description:
        "Trajnim i avancuar në Google Ads, PPC, SEO, Meta Ads dhe Rritjen e Rrjeteve Sociale.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Installment & Scholarship Options 💳",
      description:
        "Easy EMI options & special scholarships for eligible students.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Mentorim personal dhe orientim në karrierë 🎤",
      description:
        "Mentorim 1-1, këshillim për karrierë dhe intervista provë.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Networking & Alumni 🌍",
      description:
        "Qasje e palimituar në networkun tonë të të diplomuarve dhe në networkun e industrisë.",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // For scroll animation

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleNext = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blobsData.length); // Loop through the items
        setIsTransitioning(false);
      }, 500);
    };

    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, isPaused, blobsData.length]);

  // Scroll-based animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  // Handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden mb-20 md:mb-20 md:mt-20"
    >
      {/* Background Image */}
      <img
        src={OfferingBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 dark:opacity-20"
      />

      <div className="mx-auto relative z-10 flex flex-col md:flex-col sm:flex-row xs:flex-row bg-gray items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-8">
          <div
            className={`flex flex-col items-center justify-center transition-all duration-1000  ease-in-out  ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div
              className="flex md:flex-row-reverse xs:flex-col-reverse items-center justify-between  relative p-6 rounded-sm text-center overflow-hidden cursor-pointer "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`w-full h-80 xs:h-auto sm:h-auto rounded-lg ml-10 md:ml-10 xs:ml-0 relative z-10 dark:bg-transparent top-5 flex flex-col items-center justify-center gap-5 mb-10  `}
              >
                <h1 className="sticky top-0 z-50 text-5xl text-center rounded-xl bg-white py-4 dark:p-0 dark:bg-transparent w-full mb-10 text-green-400">
                  {" "}
                  TheDigitalFlix{" "}
                </h1>
                <div
                  className={`flex flex-col items-center justify-center rounded-xl bg-gray-800 py-4 dark:p-0 dark:bg-transparent gap-5 mb-5 transition-all duration-500 ease-in-out transform ${
                    isTransitioning
                      ? "translate-x-100% opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  <div className="text-5xl text-white">
                    {blobsDataTwo[currentIndex].icon}
                  </div>
                  <div>
                    <h3 className="mt-4 text-3xl md:text-xl xs:text-2xl text-center font-bold text-white">
                      {blobsDataTwo[currentIndex].title}
                    </h3>
                    <p className="mt-2 text-xl md:text-2xl xs:text-lg text-center text-gray-100">
                      {blobsDataTwo[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-auto h-auto md:py-5 overflow-hidden flex flex-col items-center justify-center xs:mt-5 sm:mt-5 xs:mb-5 sm:mb-5">
                <div className="border-t-2 w-full rotate-90 mt-20 sm:hidden xs:hidden"></div>
                <div className="z-50 py-5 rounded-lg flex items-center justify-center">
                  <img
                    src={Logo}
                    alt="logo"
                    className="md:w-full xs:w-64 md:h-full object-cover"
                  />
                </div>
                <div className="border-t-2 w-full rotate-90 mb-20 sm:hidden xs:hidden"></div>
              </div>

              <div
                className={`w-full h-80 rounded-lg mr-10 md:mr-10 xs:mr-0 relative z-10 top-5 flex flex-col items-center justify-center gap-5 sm:mb-10 xs:mb-10 `}
              >
                <h1 className="text-5xl text-center w-full text-red-400 mb-10 rounded-xl bg-white py-4 dark:p-0 dark:bg-transparent ">
                  {" "}
                  Others{" "}
                </h1>
                <div
                  className={`flex flex-col items-center justify-center gap-5 mb-2 rounded-xl bg-gray-800 py-4 dark:p-0 dark:bg-transparent transition-all duration-500 ease-in-out transform ${
                    isTransitioning
                      ? "translate-x-100% opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  <div className="text-5xl text-white">
                    {blobsData[currentIndex].icon}
                  </div>
                  <div>
                    <h3 className="mt-4 text-4xl md:text-xl xs:text-2xl text-center font-bold text-white">
                      {blobsData[currentIndex].title}
                    </h3>
                    <p className="mt-2 text-xl md:text-2xl xs:text-lg text-center text-gray-100">
                      {blobsData[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingSection;
