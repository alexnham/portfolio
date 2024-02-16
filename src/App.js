import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
  return (
    <div className="bg-gradient-to-b from-green-700 to-green-400">
      <div>
        <Navbar/>
      </div>
      <div className="overflow-auto">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      

      
    </div>
  );
}

export default App;
