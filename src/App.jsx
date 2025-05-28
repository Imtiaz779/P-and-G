import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Insights from "./pages/Insights/Insights";
import CorporateSustainability from "./pages/CorporateSustainability/CorporateSustainability";
import Career from "./pages/Career/Career";

const App = () => {
  return (
    <>
      <Header />
<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/corporatesustainability' element={<CorporateSustainability />} />
        <Route path='/career' element={<Career />} />
        
      </Routes>
      <Footer />
    </>
  );
};

export default App;
