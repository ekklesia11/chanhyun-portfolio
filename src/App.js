import React, { Component } from "react";
import Profile from "./Profile";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import loading from "./styles/image/loading.gif";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 5500);
  }

  render() {
    return this.state.loaded ? (
      <div className="bg-gray-300 w-full absolute">
        <Navbar />
        <Profile />
        <Element name="about">
          <Fade bottom>
            <About />
          </Fade>
        </Element>
        <Element name="project">
          <Fade bottom>
            <Project />
          </Fade>
        </Element>
        <Element name="contact">
          <Fade bottom>
            <Contact />
          </Fade>
        </Element>
        <Footer />
      </div>
    ) : (
      <div className="flex justify-center items-center absolute top-0 bottom-0 right-0 left-0">
        <img src={loading} alt="Loading" />
      </div>
    );
  }
}

export default App;
