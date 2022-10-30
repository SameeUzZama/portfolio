import React from "react";
import About from "./About/About";
import Contact from "./Contacts/Contact";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";

export const Landing = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
