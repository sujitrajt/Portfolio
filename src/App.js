import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Contact from "./components/Contact";
import Work from "./components/Work"
import Skills from "./components/Skills"
import About from "./components/About"
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import VisitorCounter from "./components/VisitorCounter";
import React, { useRef } from "react";
function App() {
  const workRef = useRef();
  const scrollCallback = () => {
    workRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div>
      <VisitorCounter />
      <Navbar />
      <SocialLinks />
      <Home scrollCallback={scrollCallback} />
      <About />
      <Experience />
      <Certifications />
      <Skills />
      <Work refProps={workRef} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
