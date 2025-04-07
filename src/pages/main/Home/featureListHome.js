import React, { useEffect, useRef, useState } from "react";

import { AiOutlineBulb, AiOutlineClockCircle, AiOutlineCodeSandbox, AiOutlineFacebook, AiOutlineGlobal, AiOutlineLineChart, AiOutlineTeam } from "react-icons/ai";
import { BiBookContent, BiBookOpen, BiGift } from "react-icons/bi";
import { MdOndemandVideo, MdOutlineCastForEducation, MdPayments, MdWorkOutline, MdWorkspacePremium } from "react-icons/md";
import { GiArtificialIntelligence, GiSkills } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { RiGuideFill } from "react-icons/ri";

const features = [
  
    {
        icon: <AiOutlineClockCircle style={{ fontSize: "3rem" }} />,
        title: "Kohëzgjatja e kursit",
        description: "3 muaj mësim intensive",
      },
      {
        icon: <BiBookContent style={{ fontSize: "3rem" }} />,
        title: "Numri total i moduleve",
        description: "50+ module të fokusuara",
      },
      {
        icon: <MdOutlineCastForEducation style={{ fontSize: "3rem" }} />,
        title: "Mësimi",
        description: "Online",
      },
      {
        icon: <MdWorkspacePremium style={{ fontSize: "3rem" }} />,
        title: "Çertifikime",
        description: "20+ Certifikime te njohura (Google, HubSpot etj.)",
      },
      {
        icon: <MdWorkOutline style={{ fontSize: "3rem" }} />,
        title: "Mbështetje",
        description: "Asistencë 100% për punësim dhe freelance",
      },
      {
        icon: <GiSkills style={{ fontSize: "3rem" }} />,
        title: "Trajnim praktik",
        description: "Punoni në projekte reale dhe fushata aktuale",
      },
      {
        icon: <GiArtificialIntelligence style={{ fontSize: "3rem" }} />,
        title: "Inteligjenca Artificiale në Marketingun Dixhital",
        description: "Zotëroni veglat me AI për automatizim dhe marketing më efikas",
      },
      {
        icon: <AiOutlineFacebook style={{ fontSize: "3rem" }} />,
        title: "Reklama dhe Rrjete Sociale",
        description: "Reklama në Google dhe Meta. Marketing nëpërmjet Facebook dhe Instagram",
      },
      {
        icon: <AiOutlineCodeSandbox style={{ fontSize: "3rem" }} />,
        title: "Web Development",
        description: "WordPress, Hosting & SEO",
      },
      {
        icon: <AiOutlineLineChart style={{ fontSize: "3rem" }} />,
        title: "Analiza e të dhënave",
        description: "Ndiqni dhe optimizoni fushata marketingu",
      },
      {
        icon: <MdPayments style={{ fontSize: "3rem" }} />,
        title: "Pagesa",
        description: "Pagesa online ose cash",
      },
      {
        icon: <BiGift style={{ fontSize: "3rem" }} />,
        title: "Bonuse dhe ulje",
        description: "Oferta të vecanta dhe zbritje për regjistrimet e para",
      },
      {
        icon: <BiBookOpen style={{ fontSize: "3rem" }} />,
        title: "Material Kursi",
        description: "Udhëzues dhe materiale studimore",
      },
      {
        icon: <PiStudent style={{ fontSize: "3rem" }} />,
        title: "Akses LMS",
        description: "Akses 24/7 në TheDigitalFlix LMS (Flix Elevate)",
      },
      {
        icon: <AiOutlineBulb style={{ fontSize: "3rem" }} />,
        title: "Qartësim dhe Mentorim",
        description: "Mentorim 1 në 1 dhe seanca qartësimi",
      },
      {
        icon: <MdOndemandVideo style={{ fontSize: "3rem" }} />,
        title: "Seanca të regjistruara",
        description: "Akses të cdo ore mesimi në rast se ju mungoni",
      },
      {
        icon: <AiOutlineGlobal style={{ fontSize: "3rem" }} />,
        title: "Biznes dhe Freelance",
        description: "Mësoni si të nisni agjensinë tuaj dixhitale",
      },
      {
        icon: <AiOutlineTeam style={{ fontSize: "3rem" }} />,
        title: "Network dhe Alumni",
        description: "Akses ekskluziv në rrjetet e marketingut dixhital",
      },
      {
        icon: <RiGuideFill style={{ fontSize: "3rem" }} />,
        title: "Suport",
        description: "Suport Individual i përhershëm",
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
    <h2 className="text-5xl sm:text-2xl xs:text-2xl font-bold text-red-600 mt-10 dark:text-red-500 text-center mb-10">
    CDO GJË QË JU DUHET TË DINI
    </h2>
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-20 p-8 w-full mb-10">
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