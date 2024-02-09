import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <div >
        <Navbar/>
      </div>
      <div className="overflow-auto">
        <Home />
        <About />
        <Projects />
      </div>
      

      
    </div>
  );
}

export default App;
