import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import data from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style/JetSetRadio.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="hero container-fluid bg-dark text-white vh-100 d-flex flex-column" style={{overflowY: 'auto'}}>
        <div className="flex-grow-1 d-flex justify-content-center align-items-center text-center p-5">
          <div>
            <h1>{data.hero.name}</h1>
            <h3>{data.hero.subtitle}</h3>
            <h4>{data.hero.description}</h4>
          </div>
        </div>
        <div className="text-center pb-3">
          <i className="bi bi-chevron-down scroll-indicator"></i>
        </div>
      </div>
      <About data={data.about} />
      <Skills data={data.skills} />
      <Experience data={data.experience} />
      <Projects data={data.projects} />
      <Footer />
    </>
  );
}

export default App;
