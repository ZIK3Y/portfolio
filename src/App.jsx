import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="hero container-fluid bg-dark text-white">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>Vincent Roure</h1>
          <h3>Game & XR Developer</h3>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            adipisci asperiores nihil neque atque voluptates recusandae modi,
            velit maiores! Vel ea doloremque porro id eius perspiciatis sequi
            vitae tenetur nesciunt.
          </h4>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
