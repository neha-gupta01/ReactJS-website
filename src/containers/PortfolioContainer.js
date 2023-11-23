import React from "react";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";
import Footer from "../components/footer";

const PortfolioContainer = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Portfolio showAll={true} />
      <Footer />
    </React.Fragment>
  );
};

export default PortfolioContainer;
