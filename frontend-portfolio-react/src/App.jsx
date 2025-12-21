function App() {
  return (
    <div style={{ color: "red", fontSize: "40px", padding: "40px" }}>
      REACT IS WORKING
    </div>
  );
}

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

