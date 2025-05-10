import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Çfarë shërbimesh ofron Agjencia e Marketingut Dixhital TheDigitalFlix?",
      answer:"Ne ofrojmë një paketë të plotë shërbimesh të marketingut dixhital, duke përfshirë SEO, PPC, Google Ads, Marketing në Rrjete Sociale, Web Development, Branding, Content Marketing , etc."
        },
    {
      question: "Si mund të ndihmojë marketingu dixhital në rritjen e biznesi im?",
      answer: "Marketingu dixhital rrit praninë tuaj në internet, drejton trafikun që synoni, përmirëson angazhimin e klientëve dhe rrit shitjet dhe ROI me strategji të parashikuara.",
    },
    {
      question: "Si përfiton faqja ime nga SEO?",
      answer:
        "SEO (Search Engine Optimization) ndihmon në përmirësimin e renditjes së faqes suaj të internetit në Google, duke e bërë më të lehtë për klientët potencial që të gjejnë biznesin tuaj në mënyrë organike.",
    },
    {
      question:
        "Çfarë është PPC dhe si mund ta ndihmojë biznesin tim?",
      answer: "Reklamimi PPC (Pay-Per-Click) drejton trafikun e menjëhershëm në faqen tuaj të internetit duke vendosur reklama me pagesë në Google dhe platformat e rrjeteve sociale, duke piketuar klientë me konvertim të lartë.",
    },
    {
      question: "Çfarë shërbimesh të marketingut në rrjete sociale ofroni?",
      answer: "Ne menaxhojmë marketingun e Facebook, Instagram, LinkedIn, Twitter dhe YouTube, duke përfshirë fushatat e reklamave, krijimin e përmbajtjes, bashkëpunimet e influencerave dhe strategjitë e angazhimit të brandit.",
    },
    {
      question: "Si e masni suksesin e fushatave të marketingut dixhital?",
      answer: "Ne përdorim Google Analytics, Facebook Pixel dhe mjete të tjera të drejtuara nga të dhënat për të gjurmuar trafikun e faqes në internet, konvertimet, normat e angazhimit dhe ROI.",
    },
    {
      question:
        "A ofroni shërbime të zhvillimit të faqes në internet?",
      answer: "Po! Ne krijojmë faqe interneti të përshtatshme për SEO, të përgjegjshme për celularin dhe me performancë të lartë për bizneset, dyqanet e-commerce (e-shop) dhe brandet personale.",
    },
    {
      question:
        "Sa kohë duhet për të parë rezultatet nga marketingu dixhital?",
      answer: "Kjo varet nga shërbimi: \n SEO kërkon 3-6 muaj për renditjen organike. \n Reklamat PPC dhe rrjetet sociale japin rezultate të menjëhershme. \n Marketingu dhe brandimi i përmbajtjes rriten në mënyrë të qëndrueshme me kalimin e kohës.",
    },
    {
      question:
        "A mund të drejtoj të dyja fushatat SEO dhe PPC së bashku?",
      answer: "Absolutisht! SEO ndërton trafik organik afatgjatë, ndërsa PPC siguron drejtime të menjëhershme - një kombinim i fuqishëm për rritjen e biznesit.",
    },
    {
      question:
        "Cilave industri i shërbeni?",
      answer: "Ne ofrojmë zgjidhje të marketingut dixhital për kujdesin shëndetësor, e-commerece, arsimin, pasuritë e paluajtshme, financat, mikpritjen, automotive, argëtimin dhe më shumë.",
    },

    {
      question:
        "A krijoni strategji marketingu me porosi për çdo biznes?",
      answer: "Po, ne zhvillojmë strategji të personalizuara, të përshtatura për industrinë tuaj, audiencën që synoni dhe qëllimet e biznesit për të siguruar efektivitetin maksimal.",
    },
    {
      question:
        "Sa kushton marketingu dixhital?",
      answer: "Kostoja varet nga nevojat, konkurrenca dhe qëllimet e biznesit tuaj. Ne ofrojmë plane çmimesh fleksibël për t'iu përshtatur startupeve, SME-ve dhe sipërmarrjeve.",
    },
    {
      question:
        "A mund të garantoni renditjen më të lartë në Google?",
      answer: "Askush nuk mund të garantojë renditjen # 1 në Google. Megjithatë, teknikat tona të provuara SEO përmirësojnë dukshmërinë e kërkimit dhe rrisin shanset tuaja për t'u renditur më lart.",
    },
    {
      question:
        "Si mund të filloj me TheDigitalFlix Agency?",
      answer: "Mund të caktoni një konsultë pa pagesë duke telefonuar në +355674824786, duke dërguar email në connect@thedigitalflix.al ose duke plotësuar formularin e kontaktit në faqen tonë të internetit.",
    },
    {
      question:
        "A punoni me klientë të huaj?",
      answer: "Po! Ne ofrojmë shërbime të marketingut dixhital në gjithë botën dhe kemi përvojë pune me biznese nga vende të ndryshme.",
    },
    {
      question:
        "A mund ta menaxhoni buxhetin tim të paguar për reklamat?",
      answer: "Po! Ne ndajmë dhe optimizojmë në mënyrë strategjike shpenzimet tuaja për reklamat për të siguruar fitime maksimale në platforma si Google Ads, Facebook Ads dhe LinkedIn Ads.",
    },
    {
      question:
        "Çfarë e bën TheDigitalFlix të ndryshëm nga agjencitë e tjera?",
      answer: "✅ Zgjidhje të marketingut dixhital të mbështetur nga Inteligjenca Artificiale \n ✅ Strategji të drejtuara nga të dhënat për ROI të lartë \n ✅ Plane marketingu të personalizuara për çdo biznes \n ✅ Ekip ekspertësh me përvojë në industri \n ✅ Zgjidhje dixhitale “end to end” nga brandimi tek reklamimi",
    },
    {
      question:
        "Sa shpesh do të marr raporte për fushatat e mia?",
      answer: "Ne ofrojmë raporte javore dhe mujore mbi performancën e fushatës suaj, duke përfshirë analitikën e trafikut, ndjekjen e konvertimit dhe analizën e ROI.",
    },
    {
      question:
        "A ofroni shërbime të marketingut të contentit?",
      answer: "Po! Ne krijojmë blogje të optimizuara për SEO, përmbajtje uebsajti, fushata emaili dhe përfshirje të contentit së rrjeteve sociale për të ndërtuar autoritetin e brandit.",
    },
    {
      question:
        "Si mund ta di se cili shërbim i marketingut dixhital është i duhuri për biznesin tim?",
      answer: "Ekspertët tanë do të vlerësojnë nevojat e biznesit tuaj, konkurrentët dhe qëllimet për të rekomanduar strategjitë më efektive të marketingut dixhital për suksesin tuaj.",
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
          Pyetjet më të shpeshta
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
