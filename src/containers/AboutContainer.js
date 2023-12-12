import React from "react";
import Navbar from "../components/navbar";
import About from "../components/about";
import Footer from "../components/footer";
import Cart from "../components/cart";

const AboutContainer = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Cart />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default AboutContainer;
