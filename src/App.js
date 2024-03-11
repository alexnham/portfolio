import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Socials from "./Socials";

function App() {
  return (
    <div className="">
      <div className="overflow-auto">
        <Home />
        <About />
        <Skills/>
        <Projects />
        <Contact />
      </div>
      

      
    </div>
  );
}

export default App;
