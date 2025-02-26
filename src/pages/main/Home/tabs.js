import { Tabs, Card } from "flowbite-react";
import { GrCertificate } from "react-icons/gr";
import { PiBooks } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";

import React from "react";

export function TabsCert() {
  return (
    <div className=" p-6">
      <Tabs aria-label="Default tabs" variant="default"  theme={{ tablist: { tabitem: { base: "text-2xl px-6 py-4 flex items-center justify-center" } } }}>
      <Tabs.Item title="Courses" icon={PiBooks}>
          <div className="flex items-center justify-center gap-6">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://plus.unsplash.com/premium_photo-1661678060948-b8d1d293889a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlYXJjaCUyMGVuZ2luZSUyMG9wdGltaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                FlixStart Digital
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Your gateway to the world of digital marketing! This beginner-friendly course covers SEO, social media, PPC, content marketing, and AI tools, providing a strong foundation for aspiring marketers.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://plus.unsplash.com/premium_photo-1681248156500-8f209e8e466e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q291cnNlfGVufDB8fDB8fHww"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                FlixElite Digital PRO
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Become a certified digital marketing expert with our advanced course! Master AI-driven strategies, paid advertising, analytics, automation, and high-level digital marketing techniques to accelerate your career.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q291cnNlfGVufDB8fDB8fHww"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                FlixYoung Digital Creators 
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              A fun and interactive course designed for school students to explore the world of digital marketing, creativity, and technology. Learn content creation, social media basics, website building, and AI-powered tools to develop future-ready skills! 🚀
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <button className="text-gray-300 hover:text-white text-sm">
              View More...
            </button>
          </div>
        </Tabs.Item>
        <Tabs.Item active title="Certifications" icon={GrCertificate}>
          <div className="flex items-center justify-center gap-6">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://plus.unsplash.com/premium_photo-1661751188825-710ec341b907?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Certification One
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://images.unsplash.com/photo-1612214047790-7ab02b985495?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENlcnRpZmljYXRlfGVufDB8fDB8fHww"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Certification Two
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://plus.unsplash.com/premium_photo-1682765673139-40958c79e647?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Certification Three
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <button className="text-gray-300 hover:text-white text-sm">
              View More...
            </button>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Tools" icon={FaGear}>
          <div className="flex items-center justify-center gap-6">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://plus.unsplash.com/premium_photo-1707690324388-8d6ba5fdf33d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2FpbCUyMG1lZGlhJTIwdG9vbHN8ZW58MHx8MHx8fDA%3D"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Tool One
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://plus.unsplash.com/premium_photo-1708000150994-f00276e70c95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29jYWlsJTIwbWVkaWElMjB0b29sc3xlbnwwfHwwfHx8MA%3D%3D"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Tool Two
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://images.unsplash.com/photo-1581092157699-83c90752400a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29jYWlsJTIwbWVkaWElMjB0b29sc3xlbnwwfHwwfHx8MA%3D%3D"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Tool Three
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <button className="text-gray-300 hover:text-white text-sm">
              View More...
            </button>
          </div>
        </Tabs.Item>
        {/* <Tabs.Item title="Contacts" icon={HiClipboardList}>
        This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item> */}
        {/* <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item> */}
      </Tabs>
    </div>
  );
}

export default TabsCert;
