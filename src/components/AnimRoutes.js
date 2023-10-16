import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portefolio from "../pages/Portfolio";

import { Routes, Route, useLocation } from "react-router-dom";

const AnimRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portefolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AnimRoutes;
