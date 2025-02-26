import { Tabs, Card } from "flowbite-react";
import { GrCertificate } from "react-icons/gr";
import { PiBooks } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";

import React from "react";

export function TabsCert() {
  return (
    <div className="p-6">
      <Tabs
        aria-label="Default tabs"
        variant="default"
        theme={{
          tablist: {
            tabitem: {
              base: "text-2xl px-6 py-4 flex items-center justify-center",
            },
          },
        }}
      >
        <Tabs.Item title="Courses" icon={PiBooks}>
          <h2 className="text-5xl pl-6 font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Get 20+
          </h2>
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
                Your gateway to the world of digital marketing! This
                beginner-friendly course covers SEO, social media, PPC, content
                marketing, and AI tools, providing a strong foundation for
                aspiring marketers.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
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
                Become a certified digital marketing expert with our advanced
                course! Master AI-driven strategies, paid advertising,
                analytics, automation, and high-level digital marketing
                techniques to accelerate your career.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
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
                A fun and interactive course designed for school students to
                explore the world of digital marketing, creativity, and
                technology. Learn social media basics, website building, and
                AI-powered tools to develop future-ready skills!
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
          <h2 className="text-5xl pl-6 font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Get 20+
          </h2>
          <div className="flex items-center justify-center gap-6">
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
                Covers the basics of digital marketing, including SEO, SEM,
                email marketing, and analytics.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
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
                Learn to create ads, target the right audience, and measure
                success on Meta platforms (Facebook, Instagram).
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
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
                Covers the basics of SEO, keyword research, and on-page
                optimization. This course is developed by leading experts
                @Semrush.
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
          <h2 className="text-4xl pl-6 font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Get 20+
          </h2>
          <div className="flex items-center justify-center gap-6">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktdw1WPeaQH_e89g14Mkn4J5FlCnU4J0vdw&s"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Google Ads
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Google’s advertising platform for creating targeted search,
                display, and video ads to drive traffic and sales.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
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
                A leading website builder and CMS for creating and managing
                websites easily with themes and plugins.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
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
                An AI-powered chatbot that assists with content creation,
                automation, and customer support. 🚀
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
