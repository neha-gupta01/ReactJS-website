import React from "react";

const Portfolio = () => {
  return (
    <section className="container py-5" id="portfolio">
      <div className="row mt-4 py-3">
        <div className="col-12 d-flex flex-column text-center justify-content-center">
          <h2>PORTFOLIO</h2>
          <h5 className="text-secondary fw-normal py-2 fst-italic">
            A collection of projects I've worked on.
          </h5>
        </div>
      </div>
      <div className="row mt-5 mx-0 justify-content-center align-items-center">
        <div className="col-lg-3 px-md-3 px-0 col-md-4 card-wrapper">
          <div className="card mt-4">
            <img
              src="images/e-commerce.png"
              className="img-fluid"
              alt="portfolio-img"
            />
            <div className="card-body text-center">
              <h6 className="card-title">E-commerce Website</h6>
              <p className="card-text text-secondary">HTML/CSS/JavaScript</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 px-md-3 px-0 col-md-4 card-wrapper">
          <div className="card mt-4">
            <img
              src="images/landing-page.jpg"
              className="img-fluid"
              alt="portfolio-img"
            />
            <div className="card-body text-center">
              <h6 className="card-title">Responsive Landing Page</h6>
              <p className="card-text text-secondary">HTML/CSS/Bootstrap</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 px-md-3 px-0 col-md-4 card-wrapper">
          <div className="card mt-4">
            <img
              src="images/calculator-app.jpg"
              className="img-fluid"
              alt="portfolio-img"
            />
            <div className="card-body text-center">
              <h6 className="card-title">Calculator App</h6>
              <p className="card-text text-secondary">HTML/CSS/JavaScript</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 px-md-3 px-0 col-md-4 card-wrapper">
          <div className="card mt-4">
            <img
              src="images/blog.jpg"
              className="img-fluid"
              alt="portfolio-img"
            />
            <div className="card-body text-center">
              <h6 className="card-title">Blog Website</h6>
              <p className="card-text text-secondary">HTML/CSS/PHP</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 px-md-3 px-0 col-md-4 card-wrapper">
          <div className="card mt-4">
            <img
              src="images/task.jpg"
              className="img-fluid"
              alt="portfolio-img"
            />
            <div className="card-body text-center">
              <h6 className="card-title">Task Management App</h6>
              <p className="card-text text-secondary">ReactJS</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 px-md-3 px-0 col-md-4 card-wrapper">
          <div className="card mt-4">
            <img
              src="images/data.jpg"
              className="img-fluid"
              alt="portfolio-img"
            />
            <div className="card-body text-center">
              <h6 className="card-title">Data Visualization</h6>
              <p className="card-text text-secondary">Python/Plotly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
