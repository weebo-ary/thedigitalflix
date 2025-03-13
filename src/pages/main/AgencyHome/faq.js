import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question:
        "What services does TheDigitalFlix Digital Marketing Agency provide?",
      answer:
        "We offer a complete suite of digital marketing services, including SEO, PPC, Google Ads, Social Media Marketing, Website Development, Branding, Content Marketing, and more.",
    },
    {
      question: " How can digital marketing help my business grow?",
      answer:
        "Digital marketing enhances your online presence, drives targeted traffic, improves customer engagement, and boosts sales and ROI with measurable strategies.",
    },
    {
      question: "How does SEO benefit my website?",
      answer:
        "SEO (Search Engine Optimization) helps improve your website’s ranking on Google, making it easier for potential customers to find your business organically.",
    },
    {
      question: "What is PPC, and how can it help my business?",
      answer:
        "PPC (Pay-Per-Click) advertising drives instant traffic to your website by placing paid ads on Google and social media platforms, targeting high-converting customers.",
    },
    {
      question: "What social media marketing services do you offer?",
      answer:
        "We manage Facebook, Instagram, LinkedIn, Twitter, and YouTube marketing, including ad campaigns, content creation, influencer collaborations, and brand engagement strategies.",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "We use Google Analytics, Facebook Pixel, and other data-driven tools to track website traffic, conversions, engagement rates, and ROI.",
    },
    {
      question: "Do you offer website development services?",
      answer:
        "Yes! We create SEO-friendly, mobile-responsive, and high-performance websites for businesses, e-commerce stores, and personal brands.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "It depends on the service: \n SEO takes 3-6 months for organic ranking. \n PPC and social media ads deliver instant results. \n Content marketing & branding grow steadily over time.",
    },
    {
      question: "Can I run both SEO and PPC campaigns together?",
      answer:
        "Absolutely! SEO builds long-term organic traffic, while PPC provides immediate leads—a powerful combination for business growth.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We provide digital marketing solutions for Healthcare, E-commerce, Education, Real Estate, Finance, Hospitality, Automotive, Entertainment, and more.",
    },
    {
      question: "Do you create custom marketing strategies for each business?",
      answer:
        "Yes, we develop custom strategies tailored to your industry, target audience, and business goals to ensure maximum effectiveness.",
    },
    {
      question: "How much does digital marketing cost?",
      answer:
        "The cost depends on your business needs, competition, and goals. We offer flexible pricing plans to suit startups, SMEs, and enterprises.",
    },
    {
      question: "Can you guarantee top rankings on Google?",
      answer:
        "No one can guarantee #1 rankings on Google. However, our proven SEO techniques improve search visibility and increase your chances of ranking higher.",
    },
    {
      question: "How do I get started with TheDigitalFlix Agency?",
      answer:
        "You can schedule a free consultation by calling +91 9201457156, emailing connect@thedigitalflix.com, or filling out the contact form on our website.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! We provide global digital marketing services and have experience working with businesses across different countries.",
    },
    {
      question: "Can you manage my paid advertising budget?",
      answer:
        "Yes! We strategically allocate and optimize your ad spend to ensure maximum returns on platforms like Google Ads, Facebook Ads, and LinkedIn Ads.",
    },
    {
      question: "What makes TheDigitalFlix different from other agencies?",
      answer:
        "✅ AI-powered digital marketing solutions \n ✅ Data-driven strategies for high ROI \n ✅ Custom marketing plans for every business \n ✅ Expert team with industry experience \n ✅ End-to-end digital solutions from branding to advertising",
    },
    {
      question: "How often will I receive reports on my campaigns?",
      answer:
        "We provide weekly and monthly reports on your campaign performance, including traffic analytics, conversion tracking, and ROI analysis.",
    },
    {
      question: "Do you provide content marketing services?",
      answer:
        "Yes! We create SEO-optimized blogs, website content, email campaigns, and engaging social media content to build brand authority.",
    },
    {
      question: "How do I know which digital marketing service is right for my business?",
      answer:
        "Our experts will assess your business needs, competitors, and goals to recommend the most effective digital marketing strategies for success.",
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
                  activeIndex === index
                    ? "max-h-96 md:max-h-96 xs:max-h-[800px]"
                    : "max-h-0"
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
