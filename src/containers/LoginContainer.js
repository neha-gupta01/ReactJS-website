import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Login from "../components/login"
const LoginContainer = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Login />
      <Footer />
    </React.Fragment>
  );
};

export default LoginContainer;
