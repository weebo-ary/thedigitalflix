import "./input.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/nav/nav";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import LightLogo from "./assets/Logo/LightLogo.png";
import DarkLogo from "./assets/Logo/DarkLogo.png";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./pages/main/Home/modalOnRefresh";
import Logo from "./assets/Logo/LightLogo.png"
import Feature1 from "./assets/Images/Feat2.jpg";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [theme] = useState(localStorage.getItem("theme") || "dark");

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("modalShown", "false");

    const hasModalShown = sessionStorage.getItem("modalShown");
    if (hasModalShown === "false") {
      setIsModalOpen(true);
      sessionStorage.setItem("modalShown", "true"); // Set to true after displaying
    }
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
    }, 1500); // Loading screen duration

    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 2000); // 1.5s delay for the slide-up animation (1500ms for loading + 500ms for transition)

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(transitionTimer);
    };
  }, []);

  if (isLoading || isTransitioning) {
    return (
      <div
        className={`overflow-y-hidden flex items-center justify-center min-h-screen bg-white dark:bg-gray-800 transition-transform duration-1000 transform ${
          !isLoading && "translate-y-full"
        }`}
      >
        <img
          src={theme === "dark" ? DarkLogo : LightLogo} // Switch logos based on theme
          alt={theme === "dark" ? "DarkLogo" : "LightLogo"}
          className="w-64 animate-bounce"
        />
      </div>
    );
  }

  

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen transition duration-500">
      <ScrollToTop />
      <Navbar />
      <div className="overflow-hidden">
        <Outlet />
        <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={Feature1} // Replace with your image URL
        logoSrc={Logo} // Replace with your logo URL
        head1="Welcome to Our Platform"
        head2="Please enter your details below"
        buttonText="Submit"
      />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
