import About from "./About";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <div>
        <Home/>
      </div>
      <div className="top-6/6">
        <About/>
        </div>
      <div className="top-12/6">
        <Projects/>
      </div>
   </div>
  );
}

export default App;
