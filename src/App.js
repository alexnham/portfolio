import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience"
function App() {
  return (
    <div className="">
      <div className="overflow-auto">
        <Home />
        <About />
        <Skills/>
        <Experience />
        <Projects />
        <Contact />
      </div>
      <footer className="h-10 flex justify-center items-center">
        <p>&copy; 2024 Alex Nham. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;
