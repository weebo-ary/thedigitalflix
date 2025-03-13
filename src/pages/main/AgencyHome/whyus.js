import { SettingOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const counters = [
  {
    id: 1,
    title: "Creativity 🎨",
    description: "Unique, compelling, and innovative marketing campaigns.",
    value: 100,
    suffix: "%",
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "Use of AI 🤖",
    description: "Smart automation and data analytics for optimized results.",
    value: 92,
    suffix: "%",
    color: "text-green-500",
  },
  {
    id: 3,
    title: "Performance Efficiency 🛠️",
    description: "Proven strategies that drive conversions and revenue.",
    value: 95,
    suffix: "%",
    color: "text-orange-500",
  },
];

const counterTwo = [
  {
    id: 4,
    title: "Client Satisfaction ❤️",
    description:
      "Exceptional service, transparent communication, and measurable growth.",
    value: 99,
    suffix: "%",
    color: "text-purple-500",
  },
  {
    id: 5,
    title: "Success Rate 🎓",
    description:
      " Delivering outstanding results and helping businesses scale effectively.",
    value: 99,
    suffix: "%",
    color: "text-pink-500",
  },
];

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // Animation time (ms)
      const increment = end / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 10);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <span ref={ref} className="text-5xl font-extrabold">
      {count}
      {suffix}
    </span>
  );
};

function WhyUsSection() {
  return (
    <div className="mx-8 md:my-10 sm:my-0 xs:my-0 p-5">
      <div className="">
        <div className="">
          <h2 className="text-center md:text-center sm:text-start xs:text-start text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-gray-900 dark:text-white mb-4">
            Why Us ?
          </h2>
        </div>
        <div className="">
          <p className="text-3xl md:text-3xl sm:text-xl xs:text-xl text-center md:text-center sm:text-start xs:text-start text-gray-600 dark:text-gray-400">
            At <b>TheDigitalFlix</b>, we deliver cutting-edge <b>AI-powered digital
            marketing solutions</b> tailored to accelerate your business growth. Our
            data-driven strategies, creative campaigns, and automation tools
            ensure maximum ROI and brand impact in the competitive digital
            landscape.
          </p>
        </div>
      </div>
      <div className=""></div>
      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-5 mt-10 items-center">
        {counters.map(
          ({ id, title, value, suffix, color, index, description }) => (
            <div
              key={index}
              className="relative p-6 rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-start bg-white dark:bg-gray-900 hover:scale-105 duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 mb-2">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <SettingOutlined className="text-black dark:text-white text-2xl animate-spin" />
                </div>
              </div>

              {/* Blob Content */}
              <div className="relative z-10 text-center ml-4" key={id}>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm font-bold text-gray-800 dark:text-white mt-2">
                  {description}
                </p>
                <p className={`mt-2 ${color} dark:${color}`}>
                  <Counter end={value} suffix={suffix} />
                </p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex md:flex sm:grid xs:grid sm:grid-cols-1 xs:grid-cols-1 gap-5 mt-10 items-center justify-center w-full ">
        {counterTwo.map(
          ({ id, title, value, suffix, color, index, description }) => (
            <div
              key={index}
              className="relative p-6 rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-start bg-white dark:bg-gray-900 hover:scale-105 duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 mb-2">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <SettingOutlined className="text-black dark:text-white text-2xl animate-spin" />
                </div>
              </div>

              {/* Blob Content */}
              <div className="relative z-10 text-center ml-4" key={id}>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm font-bold text-gray-800 dark:text-white mt-2">
                  {description}
                </p>
                <p className={`mt-2 ${color} dark:${color}`}>
                  <Counter end={value} suffix={suffix} />
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default WhyUsSection;
