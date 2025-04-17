// src/Routes/MainRoutes.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/main/home";
import AgencyHome from "../pages/main/agencyHome";
import Services from "../pages/main/services";
import AboutUs from "../pages/main/about";
import Blogs from "../pages/main/blogs";
import BlogDetails from "../pages/main/blogDetails";
import Contact from "../pages/main/contact";
import Support from "../pages/extra-pages/support";
import NotFound from "../pages/maintenance/404";
import TrainingIndustry40 from "../pages/extra-pages/training";
import Consultancy from "../pages/extra-pages/consultancy";
import EdgeGateway from "../pages/products/edge-gateway";
import Platform from "../pages/products/platform";
import CncMoitoring from "../pages/monitoring/CncMonitoring";
import RobotMonitoring from "../pages/monitoring/RobotMonitoring";
import EnergyMonitoring from "../pages/monitoring/EnergyMonitoring";
import FlixBuild from "../pages/monitoring/FlixBuild";
import FlixAIMarketing from "../pages/monitoring/FlixAIMarketing";
import FlixSEO from "../pages/monitoring/FlixSEO";
import FlixMarkAuto from "../pages/monitoring/FlixMarkAuto";
import FlixSMM from "../pages/monitoring/FlixSMM";
import FlixEmailSmsMark from "../pages/monitoring/FlixEmailSms";
import FlixEcom from "../pages/monitoring/FlixEcom";
import FlixPPC from "../pages/monitoring/FlixPPC";
import FlixJavaScript from "../pages/monitoring/FlixJavaScript";
import FlixAdvEnglish from "../pages/monitoring/FlixJavaScript";
import FlixDropAffMark from "../pages/monitoring/FlixDropshipAffiliateMarketing";

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/",
    element: <App />,
    children: [{ path: "/agency", element: <AgencyHome /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/about", element: <AboutUs /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/services", element: <Services /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/contact-us", element: <Contact /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/blogs", element: <Blogs /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/blogs/:id", element: <BlogDetails /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/support", element: <Support /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/agency", element: <TrainingIndustry40 /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/institutions-and-classes", element: <Consultancy /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/iiot-gateway", element: <EdgeGateway /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/platform", element: <Platform /> }],
  },
  {
    path: "/",
    element: <App />,
    children: [{ path: "/flixstart-digital", element: <CncMoitoring /> }],
  },
  {
    path: "/",
    element: <App />,
    children: [{ path: "/flixelite-digital-pro", element: <RobotMonitoring /> }],
  },
  {
    path: "/",
    element: <App />,
    children: [{ path: "/flixyoung-digital-creators", element: <EnergyMonitoring /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/flixbuild-web", element: <FlixBuild /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/flix-ai", element: <FlixAIMarketing /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/flix-seo", element: <FlixSEO /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/flix-mark-auto", element: <FlixMarkAuto /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/flix-smm", element: <FlixSMM /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/flix-email-sms", element: <FlixEmailSmsMark /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/flix-ecommerce", element: <FlixEcom /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/flix-ppc", element: <FlixPPC /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/flix-javascript", element: <FlixJavaScript /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/flix-adv-english", element: <FlixAdvEnglish /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/flix-dropship-affiliate-marketing", element: <FlixDropAffMark /> }],
  },


  {
    path: "/",
    element: <App />,
    children: [{ path: "*", element: <NotFound /> }],
  },
]);

const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
