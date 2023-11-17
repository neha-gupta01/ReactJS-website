import React from "react";

const Navbar = () => {
  return (
    <header className="bg-dark fixed-top">
      <nav className="container navbar navbar-expand-lg py-3 navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-3" href="#">
            James Anderson
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link" href="#skills">
                  SKILLS
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#portfolio">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#cv">
                  CURRICULUM VITAE
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
