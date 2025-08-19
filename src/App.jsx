import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Hero from "./components/Hero";
import "./App.css";
import Hero2 from "./components/Hero2";
import About from "./components/about";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="font-sans">
        <Navbar2 />
        <Hero2 />
        <Hero />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
