import "./input.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/nav/nav";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import LightLogo from "./assets/Logo/LightLogo.png";
import DarkLogo from "./assets/Logo/DarkLogo.png";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./pages/main/Home/modalOnRefresh";
import Logo from "./assets/Logo/LightLogo.png";
import Feature1 from "./assets/Images/Feat2.jpg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [theme] = useState(localStorage.getItem("theme") || "dark");

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("modalShown", "false"); // Reset on every refresh

    setTimeout(() => {
      sessionStorage.setItem("modalShown", "true"); // Set to true after 4 seconds

      const hasModalShown = sessionStorage.getItem("modalShown");
      if (hasModalShown === "true") {
        setIsModalOpen(true);
      }
    }, 7000);
  }, []);

  // Apply the theme to the loading screen only
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsTransitioning(true);
    }, 2000);

    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 2500);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(transitionTimer);
    };
  }, []);

  if (isLoading || isTransitioning) {
    return (
      <div
        className={`overflow-y-hidden flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 transition-transform duration-1000 transform ${
          !isLoading && "translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
        <img
          src={theme === "dark" ? DarkLogo : LightLogo} // Switch logos based on theme
          alt={theme === "dark" ? "DarkLogo" : "LightLogo"}
          className="w-64 animate-bounce -mb-14"
        />
        <DotLottieReact
          src="https://lottie.host/e17fe0f4-e4eb-4db8-b21e-ad689571be14/3gxshPaFsc.lottie"
          loop
          autoplay
          className="w-full -mb-10"
        />
        <h2 className="text-2xl text-white -mb-14">Get Digital, Get Flix'ed 🚀</h2>
        </div>
      </div>
    );
  }

  const handleOnClose = () => {
    setIsModalOpen(false)
    sessionStorage.setItem("modalShown", "false");
  }

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen transition duration-500">
       <Modal
          isOpen={isModalOpen}
          onClose={handleOnClose}
          imageSrc={Feature1} // Replace with your image URL
          logoSrc={Logo} // Replace with your logo URL
          head1="Register For Callback"
          head2="Please enter your details below"
          buttonText="Submit"
          className="z-10"
        />
      <ScrollToTop />
     
      <Navbar />
      <div className="overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
