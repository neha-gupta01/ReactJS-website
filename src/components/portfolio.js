import React from "react";
import { Link } from "react-router-dom";

const portfolioData = [
  {
    imageSrc: "images/e-commerce.png",
    title: "E-commerce Website",
    description: "HTML/CSS/JavaScript",
  },
  {
    imageSrc: "images/landing-page.jpg",
    title: "Responsive Landing Page",
    description: "HTML/CSS/Bootstrap",
  },
  {
    imageSrc: "images/calculator-app.jpg",
    title: "Calculator App",
    description: "HTML/CSS/Javascript",
  },
  {
    imageSrc: "images/blog.jpg",
    title: "Blog Website",
    description: "HTML/CSS/PHP",
  },
  {
    imageSrc: "images/task.jpg",
    title: "Task Management App",
    description: "ReactJs",
  },
  {
    imageSrc: "images/data.jpg",
    title: "Data Visualization",
    description: "Python/Plotly",
  },
];

const SinglePortfolio = ({ imageSrc, title, description }) => {
  return (
    <div className="col-lg-3 px-md-3 px-0 col-md-4 card-wrapper">
      <div className="card mt-4">
        <img src={imageSrc} className="img-fluid" alt="portfolio-img" />
        <div className="card-body text-center">
          <h6 className="card-title">{title}</h6>
          <p className="card-text text-secondary">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Portfolio = ({ showAll }) => {
  const filteredPortfolioData = showAll ? portfolioData : portfolioData.slice(0, 4);

  const title = (
    <div className="row mt-4 py-3">
      <div className="col-12 d-flex flex-column text-center justify-content-center">
        <h2>PORTFOLIO</h2>
        <h5 className="text-secondary fw-normal py-2 fst-italic">
          A collection of projects I've worked on.
        </h5>
      </div>
    </div>
  );
  return (
    <section className="container py-5" id="portfolio">
      {title}
      <div className="row mt-5 mx-0 justify-content-center align-items-center">
        {filteredPortfolioData.map((item) => (
          <SinglePortfolio
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      {!showAll ? (
        <div className="col-12 mt-3 d-flex justify-content-center">
          <Link
            to="/portfolio"
            className="btn btn-lg fs-6 fw-medium mt-5 btn-light p-3"
          >
            See More
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default Portfolio;
