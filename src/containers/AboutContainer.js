import React from "react";
import Navbar from "../components/navbar";
import About from "../components/about";
import Footer from "../components/footer";

const AboutContainer = () => {
  return (
    <React.Fragment>
      <Navbar />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default AboutContainer;
