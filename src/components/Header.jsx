import "../style/Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg mt-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./vite.svg" alt="logo site" width="30" height="24" />
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
            <ul className="navbar-nav navbar-nav-scroll text-white nav-bg navbar-list p-2 rounded-pill ms-auto gap-4">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  À propos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Compétences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
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
