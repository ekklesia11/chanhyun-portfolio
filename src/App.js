import React from "react";
import Profile from "./Profile";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="bg-gray-300 w-full absolute">
      <Navbar />
      <Profile />
      <Element name="about">
        <About />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
