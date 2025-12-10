import "../style/Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-white w-100 p-5">
      <div className="container-fluid">
        <div className="row">
          {/* Section contact */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-2 text-md-start d-flex flex-column gap-2">
            <h5 className="fw-bold">Me contacter :</h5>
            <a href="https://github.com/zik3y" className="text-white">
              <i className="bi bi-github"></i> Mon GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vincent-roure-3a3ba929b/"
              className="text-white"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a href="mailto:vincentroure@gmail.com" className="text-white">
              <i className="bi bi-envelope-fill"></i> vincentroure@gmail.com
            </a>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-2 text-md-center">
            <p className="mb-0">
              &copy; 2025 Vincent Roure. Tous droits réservés.
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-2 text-md-end"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
