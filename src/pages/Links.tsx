import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          <img
            src="../../public/profile_picture.png"
            width="30"
            height="30"
            alt="Logo Navbar"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
            <Link className="nav-link text-light" to="/about">
              Contact
            </Link>
          </div>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link text-light" to="/contact">
              Socials
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
