import "../style/Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg mx-4 mt-2 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/pixel_logo.png" alt="VR Logo" width="40" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav navbar-nav-scroll text-white nav-bg navbar-list px-4 py-2 ms-auto gap-4 mt-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about">
                  À propos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Parcours
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Compétences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Expérience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
