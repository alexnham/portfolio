import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <div className="sm:flex md:hidden">
        <h1>Mobile Under Development</h1>
        </div>
      <div >
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
