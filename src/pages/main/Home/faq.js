import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What topics are covered in the digital marketing course?",
      answer:"Our advanced digital marketing training encompasses a wide range of subjects, including SEO, social media marketing, PPC advertising, content marketing, email marketing, and data analytics, ensuring a comprehensive understanding of the digital landscape."
        },
    {
      question: "How does your institution stand out from others?",
      answer: "We pride ourselves on delivering tailored IT services that meet the specific needs of businesses, setting us apart from competitors.",
    },
    {
      question: " Do you handle all work internally or outsource certain tasks?",
      answer:
        "All our services, from digital marketing to web development, are executed in-house by our dedicated team, ensuring consistent quality and accountability.",
    },
    {
      question:
        "What are the core values of your institution?",
      answer: "Our core values include innovation, integrity, and a commitment to excellence, guiding every project and interaction we undertake",
    },
    {
      question: " What is your unique selling proposition (USP) or area of expertise?",
      answer: "Our USP lies in our ability to provide customized IT solutions and agile delivery, ensuring that each client's unique requirements are met with precision.",
    },
    {
      question: "What are the course fees and available payment options?",
      answer: "Our courses are competitively priced, and we offer flexible payment plans, including installment options, to accommodate various financial situations.",
    },
    {
      question:
        "Do you offer placement assistance after course completion?",
      answer: "Yes, we provide 100% placement assistance, leveraging our extensive network to help students secure relevant job opportunities.",
    },
    {
      question:
        "Are the courses available online, offline, or both?",
      answer: "We offer flexible learning modes, allowing students to choose between online, offline, or hybrid formats to suit their preferences and schedules.",
    },
    {
      question:
        "What certifications will I receive upon completing the course?",
      answer: "Upon completion, students receive TheDigitalFlix Certificate of Completion, along with other recognized certifications from industry leaders like Google and HubSpot.",
    },
    {
      question:
        "How can I enroll in the upcoming batch?",
      answer: "To enroll, simply visit our website, fill out the registration form, and our admissions team will guide you through the process.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="overflow-hidden p-14 bg-white dark:bg-gray-800 mb-20">
      <div className="max-w-5xl sm:max-w-full xs:max-w-full mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl md:mb-10 sm:text-3xl xs:text-3xl text-gray-900 dark:text-white mb-4">
        Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 dark:border-gray-600"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 text-lg font-medium text-gray-700 dark:text-gray-300 focus:outline-none"
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                >
                  {activeIndex === index ? "▼" : "►"}
                </span>
                {"  "}
                {faq.question}
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out mb-5 ${
                  activeIndex === index ? "max-h-96 md:max-h-96 xs:max-h-[800px]" : "max-h-0"
                }`}
              >
                <div className="py-2 px-4 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
