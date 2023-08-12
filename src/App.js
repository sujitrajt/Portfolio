import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Contact from "./components/Contact";
import Work from "./components/Work"
import Skills from "./components/Skills"
import About from "./components/About"
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
