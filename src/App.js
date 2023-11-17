import React from "react";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import CV from "./components/cv";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Skills />
      <Portfolio />
      <About />
      <CV />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
