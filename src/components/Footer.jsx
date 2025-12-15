import "../style/Footer.css";

function Footer() {
  return (
    <footer id="contact" className="urban-footer text-white w-100 p-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-2 text-md-start d-flex flex-column gap-3">
            <h5 className="footer-title">Me contacter :</h5>
            <a href="https://github.com/zik3y" className="footer-link">
              <i className="bi bi-github footer-icon"></i>
              <span>Mon GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/vincent-roure-3a3ba929b/" className="footer-link">
              <i className="bi bi-linkedin footer-icon"></i>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:vincentroure.pro@gmail.com" className="footer-link">
              <i className="bi bi-envelope-fill footer-icon"></i>
              <span>vincentroure.pro@gmail.com</span>
            </a>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-2 text-md-center d-flex align-items-center justify-content-center">
            <p className="footer-copyright mb-0">
              © 2025 Vincent Roure. Tous droits réservés.
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-2 text-md-end"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
