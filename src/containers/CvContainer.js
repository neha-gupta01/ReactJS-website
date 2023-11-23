import React from "react";
import Navbar from "../components/navbar";
import CV from "../components/cv";
import Footer from "../components/footer";

const CvContainer = () => {
  return (
    <React.Fragment>
      <Navbar />
      <CV />
      <Footer />
    </React.Fragment>
  );
};

export default CvContainer;
