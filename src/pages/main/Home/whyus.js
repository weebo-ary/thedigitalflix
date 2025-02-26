import {SettingOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const counters = [
  { id: 1, title: "Creativity 🎨", value: 100, suffix: "%", color: "text-blue-500" },
  { id: 2, title: "Use of AI 🤖", value: 92, suffix: "%", color: "text-green-500" },
  { id: 3, title: "Practical Learning 🛠️", value: 95, suffix: "%", color: "text-orange-500" },
];

const counterTwo = [
  { id: 4, title: "Student Satisfaction ❤️", value: 99, suffix: "%", color: "text-purple-500" },
  { id: 5, title: "Student Success Rate 🎓", value: 99, suffix: "%", color: "text-pink-500" },
]

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
    <div className="mx-8 my-10 p-5">
      <div className="">
        <div className="">
          <h2 className="text-center md:text-center sm:text-start xs:text-start text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-gray-900 dark:text-white mb-4">
            Why Us ?
          </h2>
        </div>
        <div className="">
          <p className="text-3xl md:text-3xl sm:text-xl xs:text-xl text-center md:text-center sm:text-start xs:text-start text-gray-600 dark:text-gray-400">
          At TheDigitalFlix, we blend AI-powered digital marketing training with hands-on projects, industry certifications, and 100% placement assistance, ensuring you gain real-world skills to thrive in the digital era!
          </p>
        </div>
      </div>
      <div className=""></div>
      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-5 mt-10 items-center">
          {counters.map(({id, title, value, suffix, color, index}) => (
            <div
              key={index}
              className="relative p-6 rounded-lg shadow-md overflow-hidden flex items-center justify-start bg-white dark:bg-gray-900"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <SettingOutlined className="text-black dark:text-white text-2xl animate-spin" />
                </div>
              </div>

              {/* Blob Content */}
              <div className="relative z-10 text-start ml-4" key={id}>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {title}
                </h3>
                <p className={`mt-2 ${color} dark:${color}`}>
                  <Counter end={value} suffix={suffix} />
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex md:flex sm:grid xs:grid sm:grid-cols-1 xs:grid-cols-1 gap-5 mt-10 items-center justify-center w-full">
          {counterTwo.map(({id, title, value, suffix, color, index}) => (
            <div
              key={index}
              className="relative p-6 rounded-lg shadow-md overflow-hidden flex items-center justify-start bg-white dark:bg-gray-900"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <SettingOutlined className="text-black dark:text-white text-2xl animate-spin" />
                </div>
              </div>

              {/* Blob Content */}
              <div className="relative z-10 text-start ml-4" key={id}>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {title}
                </h3>
                <p className={`mt-2 ${color} dark:${color}`}>
                  <Counter end={value} suffix={suffix} />
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default WhyUsSection
