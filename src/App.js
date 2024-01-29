import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Contact from "./components/Contact";
import Work from "./components/Work"
import Skills from "./components/Skills"
import About from "./components/About"
import React,{useRef} from "react";
function App() {
  const workRef = useRef();
  const scrollCallback = () => {
    workRef.current.scrollIntoView({ behavior: 'smooth' })
 }
  return (
    <div>
      <Navbar/>
      <Home scrollCallback={scrollCallback}/>
      <About/>
      <Skills/>
      <Work refProps={workRef}/>
      <Contact/>
    </div>
  );
}

export default App;
