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

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <AgencyHome /> }],
  },
  {
    path: "/",
    element: <App />,
    children: [{ path: "/institute", element: <Home /> }],
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
    children: [{ path: "*", element: <NotFound /> }],
  },
]);

const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
