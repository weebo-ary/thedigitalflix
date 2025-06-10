import { Tabs, Card } from "flowbite-react";
import { GrCertificate } from "react-icons/gr";
import { PiBooks } from "react-icons/pi";
import { FaGear, FaMeta } from "react-icons/fa6";

import React from "react";
import { FaGoogle, FaHubspot } from "react-icons/fa";
import { SiCisco, SiSemrush } from "react-icons/si";
import { Link } from "react-router-dom";
import { BsMicrosoft } from "react-icons/bs";

export function TabsCert() {
  return (
    <div className="p-6 pl-6">
      <Tabs
        aria-label="Default tabs"
        variant="default"
        theme={{
          tablist: {
            tabitem: {
              base: "md:text-2xl sm:text-sm xs:text-sm md:px-6 sm:px-3   xs:px-3 py-4 flex items-center justify-center",
            },
          },
        }}
      >
        <Tabs.Item title="Kurset" active icon={PiBooks}>
          <h2 className="md:text-2xl sm:text-lg xs:text-lg md:pl-6 sm:pl-0 xs:pl-0 font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            ZBULO PROGRAMET TONA TË PLOTA – NGA FILLESTARËT TEK PROFESIONISTËT
          </h2>
          <div className="flex md:flex-row sm:flex-col xs:flex-col items-center justify-center gap-6">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://plus.unsplash.com/premium_photo-1661678060948-b8d1d293889a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlYXJjaCUyMGVuZ2luZSUyMG9wdGltaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                FlixStart Digital
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Porta juaj drejt marketingut dixhital! Kurs për fillestarë që
                mbulon SEO, rrjetet sociale, PPC, marketing përmbajtjeje dhe
                mjete me Inteligjencës Artificiale.
              </p>
              <Link to="/flixstart-digital">
                <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                  Mëso më shumë
                </button>
              </Link>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.webp?a=1&b=1&s=612x612&w=0&k=20&c=7y9fW3AX6d3TsOiY-A3aegkgaQqg6p0H3OtoDdXkkPs="
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                FlixElite Digital PRO
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Bëhuni ekspert i çertifikuar me këtë kurs të avancuar! Mësoni
                strategji të bazuara në Inteligjencën Artificiale, reklama,
                analiza, automatizim dhe teknika të nivelit të lartë rreth
                marketingut dixhital, që do ju ndihmojnë në rritjen e karrierës
                tuaj.
              </p>
              <Link to="/flixelite-digital-pro">
                <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                  Mëso më shumë
                </button>
              </Link>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://plus.unsplash.com/premium_photo-1681883455364-b8fc8c56b967?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBjb3Vyc2V8ZW58MHx8MHx8fDA%3D"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                FlixYoung Digital Creators
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Një kurs argëtues dhe ndërveprues për nxënës të shkollës për të
                zbuluar kreativitetin dhe teknologjinë. Mësoni bazat e rrjeteve
                sociale, ndërtimin e faqeve dhe përdorimin e mjeteve të
                Inteligjencës Artificiale.
              </p>
              <Link to="/flixyoung-digital-creators">
                <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                  Mëso më shumë
                </button>
              </Link>
            </Card>
            <Link to = "/institutions-and-classes">
            <button className="  text-white py-2 px-1 rounded-lg w-full md:w-1/2 sm:w-full xs:w-full">
              Shiko më shumë...
            </button>
            </Link>
          </div>
        </Tabs.Item>
        <Tabs.Item active title="Certifikata" icon={GrCertificate}>
          <h2 className="md:text-2xl sm:text-lg xs:text-lg md:pl-6 sm:pl-0 xs:pl-0 font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            DERI NË <span className="text-red-600">50+ ÇERTIFIKIME</span> ME
            MARKA NDËRKOMBËTARE SI:
            <div className="fle md:flex md:flex-row sm:grid sm:grid-cols-2 xs:grid xs:grid-cols-2 items-center gap-8 pb-6 mt-4">
              <div className="flex flex-col items-center justify-center mt-6">
                <SiCisco />
                <p className="text-3xl">Cisco</p>
              </div>
              <div className="flex flex-col items-center justify-center mt-6">
                <BsMicrosoft />
                <p className="text-3xl">Microsoft</p>
              </div>
              <div className="flex flex-col items-center justify-center mt-6">
                <FaGoogle />
                <p className="text-3xl">Google</p>
              </div>
              <div className="flex flex-col items-center justify-center mt-6">
                <FaMeta />
                <p className="text-3xl">Meta</p>
              </div>
              <div className="flex flex-col items-center justify-center mt-6">
                <FaHubspot />
                <p className="text-3xl">Hubspot</p>
              </div>
              <div className="flex flex-col items-center justify-center mt-6">
                <SiSemrush />
                <p className="text-3xl">Semrush</p>
              </div>
            </div>
          </h2>
          <div className="flex md:flex-row sm:flex-col xs:flex-col items-center justify-center gap-6">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://wave2.org/post/2017/08/29/googles-digital-garage/digital_garage_certificate.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Google Digital Garage Certifications
              </h5>
              <p>
                <b>Offered By : </b>Google
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                SEO, SEM, marketing me email dhe analiza
              </p>
              
            </Card>
            <Card
              className="max-w-sm "
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://b-onecorp.co.id/wp-content/uploads/2024/10/Screenshot-2024-07-21-at-18.08.58-1024x732-1.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Digital Marketing Meta Certifications
              </h5>
              <p>
                <b>Offered By : </b>Meta
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Krijimi i reklamave dhe analizimi i performancës
              </p>
             
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://static.semrush.com/academy/certificates/6791766f09/elijah-hardwick_1.png"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Semrush Digital Marketing Certifications
              </h5>
              <p>
                <b>Offered By : </b>Semrush
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                SEO, hulumtim fjalësh kyçe, optimizim faqeje
              </p>
              
            </Card>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Vegla" icon={FaGear}>
          <h2 className="md:text-2xl sm:text-lg xs:text-lg md:pl-6 sm:pl-0 xs:pl-0 font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            MJETET KRYESORE QË DO ZOTERONI – NGA SEO NE RRJETE SOCIALE, REKLAMA
            DHE JO VETEM
          </h2>
          <div className="flex md:flex-row sm:flex-col xs:flex-col items-center justify-center gap-6">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktdw1WPeaQH_e89g14Mkn4J5FlCnU4J0vdw&s"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Google Ads
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Krijimi i reklamave të targetuara për rritje trafiku dhe
                shitjesh
              </p>
              
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://i.ytimg.com/vi/MsRhxl_zk5A/maxresdefault.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wordpress
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Ndërtimi dhe menaxhimi i faqeve me tema dhe shtojca
              </p>
              
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://www.unimedia.tech/wp-content/uploads/2023/12/openAI-chat-gpt-1-4-1024x623.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                ChatGPT
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Inteligjence Artificiale për krijim përmbajtjeje, automatizim
                dhe ndihmë ndaj klientëve
              </p>
              
            </Card>
            
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default TabsCert;
