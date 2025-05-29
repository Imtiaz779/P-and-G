import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Insights from "./pages/Insights/Insights";
import CorporateSustainability from "./pages/CorporateSustainability/CorporateSustainability";
import Career from "./pages/Career/Career";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true, // ✅ Animate on scroll up too
      offset: 100,
      easing: "ease-in-out",
    });
     AOS.refresh();
  }, []);

 

  return (
    <div className="bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/corporatesustainability" element={<CorporateSustainability />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
