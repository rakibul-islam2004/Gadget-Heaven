import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  const getTitle = () => {
    const pageTitles = {
      "/": "Home | Gadget Heaven",
      "/statistics": "Statistics | Gadget Heaven",
      "/dashboard": "Dashboard | Gadget Heaven",
      "/history": "Purchase History | Gadget Heaven",
    };

    if (location.pathname.startsWith("/productDetails")) {
      return "Product Details | Gadget Heaven";
    }

    return pageTitles[location.pathname] || "Gadget Heaven";
  };

  return (
    <div>
      <Helmet>
        <title>{getTitle()}</title>
      </Helmet>
      <Navbar />
      <div className="min-h-[calc(100vh-445px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
