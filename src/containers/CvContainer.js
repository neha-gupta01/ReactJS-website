import React from "react";
import Navbar from "../components/navbar";
import Cv from "../components/cv";
import Footer from "../components/footer";
import Cart from "../components/cart";

const CvContainer = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Cart />
      <Cv />
      <Footer />
    </React.Fragment>
  );
};

export default CvContainer;
