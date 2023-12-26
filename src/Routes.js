import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioContainer from "./containers/PortfolioContainer";
import MainContainer from "./containers/MainContainer";
import AboutContainer from "./containers/AboutContainer";
import CvContainer from "./containers/CvContainer";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<PortfolioContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/cv" element={<CvContainer />} />
        <Route path="/" element={<MainContainer />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
