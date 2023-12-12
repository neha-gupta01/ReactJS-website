import React from "react";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";
import Footer from "../components/footer";
import Cart from "../components/cart";

const PortfolioContainer = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Cart />
      <Portfolio showAll={true} />
      <Footer />
    </React.Fragment>
  );
};

export default PortfolioContainer;
