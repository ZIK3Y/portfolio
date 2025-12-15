import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import data from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style/PixelArt.css";
import "./App.css";

function App() {
  return (
    <>
      {/* Rain Effect */}
      <div className="rain-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="rain"></div>
        ))}
      </div>

      {/* Scanline Effect */}
      <div className="scanlines"></div>

      <div className="crt-effect">
        <Header />
        <div
          className="hero container-fluid bg-dark text-white vh-100 d-flex flex-column"
          style={{ overflowY: "auto" }}
        >
          <div
            className="flex-grow-1 d-flex justify-content-center align-items-center text-center p-5"
            style={{ position: "relative", zIndex: 10 }}
          >
            <div>
              <h1 className="pixel-text" style={{ fontSize: "4rem" }}>
                {data.hero.name}
              </h1>
              <h2 className="mono-text" style={{ fontSize: "2.5rem" }}>
                {data.hero.subtitle}
              </h2>
            </div>
          </div>
          <div className="text-center pb-3">
            <i className="bi bi-chevron-down scroll-indicator blink"></i>
          </div>
        </div>
        <About data={data.about} />
        <Education data={data.education} />
        <Skills data={data.skills} />
        <Experience data={data.experience} />
        <Projects data={data.projects} />
        <Footer />
      </div>
    </>
  );
}

export default App;
