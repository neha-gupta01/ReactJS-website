import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SignUp from "../components/signUp"

const SignUpContainer = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SignUp />
      <Footer />
    </React.Fragment>
  );
};

export default SignUpContainer;
