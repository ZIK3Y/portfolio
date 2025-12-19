import { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style/PixelArt.css";
import "./App.css";

// Lazy loading des composants pour améliorer les performances
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));

// Composant de chargement simple
const LoadingFallback = () => (
  <div className="text-center py-5">
    <div className="spinner-border text-white" role="status">
      <span className="visually-hidden">Chargement...</span>
    </div>
  </div>
);

function App() {
  return (
    <>
      {/* Rain Effect - Réduit pour mobile */}
      <div className="rain-container">
        {[...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
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
            className="flex-grow-1 d-flex justify-content-center align-items-center text-center p-3 p-md-5"
            style={{ position: "relative", zIndex: 10 }}
          >
            <div className="text-center">
              <h1 className="pixel-text hero-title">{data.hero.name}</h1>
              <h2 className="mono-text hero-subtitle">{data.hero.subtitle}</h2>
            </div>
          </div>
          <div className="text-center pb-3">
            <i className="bi bi-chevron-down scroll-indicator blink"></i>
          </div>
        </div>

        <Suspense fallback={<LoadingFallback />}>
          <About data={data.about} />
          <Education data={data.education} />
          <Skills data={data.skills} />
          <Experience data={data.experience} />
          <Projects data={data.projects} allSkills={data.skills} />
        </Suspense>

        <Footer />
      </div>
    </>
  );
}

export default App;
