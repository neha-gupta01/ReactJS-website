import React, { useState } from "react";
import { Link } from "react-router-dom";
import PortfolioMenu from "./portfolioMenu";
import { CartContext } from "../contexts/cartContext";

const portfolioData = [
  {
    id: 1,
    imageSrc: "images/e-commerce.png",
    title: "E-commerce Website",
    description: "HTML/CSS/JavaScript",
    price: 59,
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 2,
    imageSrc: "images/landing-page.jpg",
    title: "Landing Page",
    description: "HTML/CSS/Bootstrap",
    price: 12,
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id: 3,
    imageSrc: "images/calculator-app.jpg",
    title: "Calculator App",
    description: "HTML/CSS/Javascript",
    price: 46,
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 4,
    imageSrc: "images/blog.jpg",
    title: "Blog Website",
    description: "HTML/CSS/PHP",
    price: 40,
    technologies: ["HTML", "CSS", "PHP"],
  },
  {
    id: 5,
    imageSrc: "images/task.jpg",
    title: "Task Management App",
    description: "ReactJS",
    price: 25,
    technologies: ["ReactJS"],
  },
  {
    id: 6,
    imageSrc: "images/data.jpg",
    title: "Data Visualization",
    description: "Python/Plotly",
    price: 20,
    technologies: ["Python", "Plotly"],
  },
  {
    id: 7,
    imageSrc: "images/data.jpg",
    title: "Data Visualization",
    description: "Python/Plotly",
    price: 27,
    technologies: ["Python", "Plotly"],
  },
  {
    id: 8,
    imageSrc: "images/data.jpg",
    title: "Data Visualization",
    description: "Python/Plotly",
    price: 62,
    technologies: ["Python", "Plotly"],
  },
  {
    id: 9,
    imageSrc: "images/data.jpg",
    title: "Data Visualization",
    description: "Python/Plotly",
    price: 14,
    technologies: ["Python", "Plotly"],
  },
  {
    id: 10,
    imageSrc: "images/data.jpg",
    title: "Data Visualization",
    description: "Python/Plotly",
    price: 50,
    technologies: ["Python", "Plotly"],
  },
  {
    id: 11,
    imageSrc: "images/data.jpg",
    title: "Data Visualization",
    description: "Python/Plotly",
    price: 55,
    technologies: ["Python", "Plotly"],
  },
  {
    id: 12,
    imageSrc: "images/data.jpg",
    title: "Data Visualization",
    description: "Python/Plotly",
    price: 5,
    technologies: ["Python", "Plotly"],
  },
  {
    id: 12,
    imageSrc: "images/data.jpg",
    title: "Data Visualization",
    description: "Python/Plotly",
    price: 19,
    technologies: ["Python", "Plotly"],
  },
  {
    id: 13,
    imageSrc: "images/data.jpg",
    title: "Data Visualization",
    description: "Python/Plotly",
    price: 7,
    technologies: ["Python", "Plotly"],
  },
];

const SinglePortfolio = ({
  id,
  imageSrc,
  title,
  description,
  price,
  onAddToCart,
}) => {
  const handleAddToCart = () => {
    const item = { id, imageSrc, title, description, price, quantity: 1 };
    onAddToCart(item);
    console.log(item);
  };

  return (
    <div className="col-lg-3 px-md-4 px-0 col-md-3 col-sm-4 card-wrapper">
      <div className="card mt-4">
        <img src={imageSrc} className="img-fluid" alt="portfolio-img" />
        <div className="card-body text-center">
          <h6 className="card-title">{title}</h6>
          <p className="card-text text-secondary">{description}</p>
          <p className="fst-italic fw-bold">${price}</p>
          <button
            type="button"
            className="btn btn-outline-primary btn-block"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Portfolio = ({ showAll }) => {
  const [filteredData, setFilteredData] = useState(
    showAll ? portfolioData : portfolioData.slice(0, 4)
  );

  const { handleAddToCart, cartItems } = React.useContext(CartContext);

  const onFilterChange = (
    searchTitle,
    selectedTechnologies,
    minPrice,
    maxPrice,
    sortBy
  ) => {
    let filteredResult = [];

    filteredResult = portfolioData.filter((item) => {
      if (
        searchTitle &&
        !item.title.toLowerCase().includes(searchTitle.toLowerCase())
      ) {
        return false;
      }

      const commonTechnologies = item.technologies.filter((tech) =>
        selectedTechnologies.includes(tech)
      );
      if (selectedTechnologies.length !== commonTechnologies.length) {
        return false;
      }

      if (minPrice && item.price < parseInt(minPrice)) {
        return false;
      }
      if (maxPrice && item.price > parseInt(maxPrice)) {
        return false;
      }
      return true;
    });
    if (sortBy === "lowToHigh") {
      filteredResult.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      filteredResult.sort((a, b) => b.price - a.price);
    }
    setFilteredData(filteredResult);
  };

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

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <section className=" py-4" id="portfolio">
      <div className="row mt-5 mx-0">
        {showAll && (
          <React.Fragment>
            <div
              className={`portfolio-toggle-btn ${menuVisible ? "active" : ""}`}
            >
              <button className="mt-1" onClick={toggleMenu}>
                <i
                  className={`fas fa-arrow-${menuVisible ? "left" : "right"}`}
                ></i>
              </button>
            </div>
            {menuVisible && (
              <div id="portfolioMenu" className="col-lg-2">
                <PortfolioMenu onFilterChange={onFilterChange} />
              </div>
            )}
          </React.Fragment>
        )}
        <div
          className={`portfolio-content container ${
            !showAll ? "col-lg-9" : "col-lg-10"
          }`}
        >
          {title}
          <div className="row mt-5 mx-0 justify-content-center align-items-center">
            {filteredData.map((item, index) => (
              <SinglePortfolio
                key={index}
                id={item.id}
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
                price={item.price}
                onAddToCart={handleAddToCart}
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
