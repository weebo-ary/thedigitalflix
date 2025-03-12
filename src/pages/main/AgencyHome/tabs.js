import { Tabs, Card } from "flowbite-react";
import { PiBooks } from "react-icons/pi";

import React from "react";

import Ags1 from "../../../assets/Images/AGS1.webp";
import Ags2 from "../../../assets/Images/AGS2.webp";
import Ags3 from "../../../assets/Images/AGS3.webp";
import Ags4 from "../../../assets/Images/AGS4.webp";
import Ags5 from "../../../assets/Images/AGS5.webp";
import Ags6 from "../../../assets/Images/AGS6.webp";

export function TabsCert() {
  return (
    <div className="p-6">
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
        <Tabs.Item title="Services" active icon={PiBooks}>
          <h2 className="md:text-2xl sm:text-lg xs:text-lg md:pl-6 sm:pl-0 xs:pl-0 font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Explore Our Power-Packed{" "}
            <span className="text-red-600">Digital Marketing Services</span>
          </h2>
          <div className="grid md:grid md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 items-center justify-center gap-6">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Ags1}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Web Development & Branding
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                🔹 "Transform Your Brand with Stunning Websites & Powerful
                Branding" 
                <br /> 
                <br /> 
                📢 Your website is your first impression—make
                it count! We design high-performance, SEO-optimized websites
                that reflect your brand’s identity. From custom website design,
                development, and maintenance to brand strategy and content
                writing, we create digital experiences that captivate and
                convert.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Ags2}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Digital Advertising & Paid Campaigns
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                🔹 "Maximize Your ROI with Smart, Data-Driven Paid Advertising"
                <br />
                <br />
                📢 Struggling to get leads? We specialize in Google Ads, Social
                Media Ads & PPC Campaigns that drive targeted traffic, boost
                conversions, and increase brand awareness. Our ROI-driven
                marketing strategies ensure that every ad spend translates into
                real business growth!
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Ags3}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Social Media & Content Marketing
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                🔹 "Engage, Influence & Grow with Powerful Content & Social
                Media Strategies"
                <br />
                <br />
                📢 Social Media is the heartbeat of modern marketing. We create
                scroll-stopping content, viral campaigns, and audience-focused
                strategies to build your brand on platforms like Instagram,
                Facebook, LinkedIn & Twitter. Our expert team delivers content
                marketing, video production, and photography to tell your
                brand’s story in a compelling way.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Ags4}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                SEO & Organic Growth Strategies
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                🔹 "Get Found on Google & Stay on Top with Proven SEO
                Strategies"
                <br />
                <br />
                📢 Want more website traffic? Our SEO experts optimize your
                website to rank higher on Google, bringing in organic leads and
                ensuring long-term growth. With keyword research, technical SEO,
                link-building, and competitor analysis, we increase visibility &
                drive high-intent visitors to your site.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Ags5}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                App Development & Digital Solutions
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                🔹 "Innovative App & Software Solutions to Grow Your Business"
                <br />
                <br />
                📢 Build your dream app with custom Android & iOS development.
                From E-commerce platforms and custom software solutions to
                seamless UI/UX experiences, we bring your digital vision to life
                with cutting-edge technology and top-tier development
                strategies.
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Ags6}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Branding, Design & Promotions
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                🔹 "Stand Out with Eye-Catching Designs & Creative Branding"
                <br />
                <br/> 
                📢 Great design fuels brand success! Our expert team provides logo
                design, business branding, promotional creatives, video editing
                & animations to make your brand visually stunning. Whether you
                need personal or corporate branding, we bring creativity &
                strategy together for unforgettable impressions!
              </p>
              <button className="bg-red-600 text-white py-3 px-2 rounded-lg w-1/2">
                Learn More
              </button>
            </Card>
          </div>
        </Tabs.Item>
        {/* <Tabs.Item active title="Certifications" icon={GrCertificate}>
          <h2 className="md:text-2xl sm:text-lg xs:text-lg md:pl-6 sm:pl-0 xs:pl-0 font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Get upto <span className="text-red-600">50+ Certifications</span> in
            alignment with Global Brands like :{" "}
            <div className="fle md:flex md:flex-row sm:grid sm:grid-cols-2 xs:grid xs:grid-cols-2 items-center gap-8 pb-6 mt-4">
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

            <button className="bg-red-600 text-white py-2 px-1 rounded-lg md:w-1/4 sm:w-full xs:w-full">
              View More...
            </button>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Tools" icon={FaGear}>
          <h2 className="md:text-2xl sm:text-lg xs:text-lg md:pl-6 sm:pl-0 xs:pl-0 font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Master the Most Powerful{" "}
            <span className="text-red-600"> Digital Marketing & AI Tools</span>{" "}
            – From SEO to Social Media, Ads & Beyond
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
            <button className="bg-red-600 text-white py-2 px-1 rounded-lg md:w-1/4 sm:w-full xs:w-full">
              View More...
            </button>
          </div>
        </Tabs.Item> */}
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
