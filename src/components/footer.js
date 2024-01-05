import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-light fixed pt-2 d-flex flex-wrap align-items-center justify-content-between">
        <p>Copyright © 2023 James Anderson</p>
        <ul className="social-icons d-flex list-unstyled">
          <li>
            <a
              href="#"
              className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
