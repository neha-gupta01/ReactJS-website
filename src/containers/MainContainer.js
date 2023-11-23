import React from "react";
import Navbar from "../components/navbar";
import Homepage from "../components/homepage";
import Skills from "../components/skills";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Footer from "../components/footer";

const MainContainer = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Homepage />
      <Skills />
      <Portfolio showAll={false} />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default MainContainer;
