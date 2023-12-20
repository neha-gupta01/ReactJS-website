import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PortfolioMenu from "./portfolioMenu";
import { CartContext } from "../contexts/cartContext";

const SinglePortfolio = ({
  id,
  imageSrc,
  title,
  description,
  price,
  onAddToCart,
}) => {
  const { cartItems, handleUpdateQuantity, handleAddToCart } =
    React.useContext(CartContext);

  const isInCart = cartItems[id] !== undefined;

  const handleAddToCartClick = () => {
    const item = { id, imageSrc, title, description, price, quantity: 1 };
    onAddToCart(item);
  };

  return (
    <div className="col-lg-3 px-md-4 px-0 col-md-3 col-sm-4 card-wrapper">
      <div className="card mt-4">
        <img src={imageSrc} className="img-fluid" alt="portfolio-img" />
        <div className="card-body text-center">
          <h6 className="card-title">{title}</h6>
          <p className="card-text text-secondary">{description}</p>
          <p className="fst-italic fw-bold">${price}</p>
          {isInCart ? (
            <div className="d-flex justify-content-center align-items-center">
              <input
                type="number"
                className="text-center mx-2 "
                style={{ width: "40px" }}
                value={cartItems[id].quantity}
                readOnly
              />
              <button
                className="btn btn-sm btn-secondary"
                onClick={() =>
                  handleUpdateQuantity(id, cartItems[id].quantity + 1)
                }
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-outline-primary btn-block"
              onClick={handleAddToCartClick}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = ({ showAll }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [portfolioList, setPortfolioList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { handleAddToCart, cartItems, handleUpdateQuantity } =
    React.useContext(CartContext);

  useEffect(() => {
    fetchPortfolioData();
  }, [itemsPerPage, currentPage]);

  const fetchPortfolioData = (filterData) => {
    setLoading(true);
    let url = `http://localhost:3001/portfolio?current_page=${currentPage}&page_size=${itemsPerPage}`;

    if (filterData) {
      const { searchTitle, selectedTechnologies, minPrice, maxPrice, sortBy } =
        filterData;
      if (searchTitle) {
        url = url + `&searchTitle=${searchTitle}`;
      }
      if (selectedTechnologies && selectedTechnologies.length > 0) {
        url = url + `&selectedTechnologies=${selectedTechnologies.join(",")}`;
      }
      if (minPrice) {
        url = url + `&minPrice=${minPrice}`;
      }
      if (maxPrice) {
        url = url + `&maxPrice=${maxPrice}`;
      }
      if (sortBy) {
        url = url + `&sortBy=${sortBy}`;
      }
    }
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setPortfolioList(response.data || []);
        setTotalPages(response?.paginate?.total_page || 0);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   if (currentPage === 1) {
  //     fetchPortfolioData();
  //   } else {
  //     setCurrentPage(1);
  //   }
  // }, [itemsPerPage]);

  const onFilterChange = (
    searchTitle,
    selectedTechnologies,
    minPrice,
    maxPrice,
    sortBy
  ) => {
    setCurrentPage(1);
    const filterData = {
      searchTitle,
      selectedTechnologies,
      minPrice,
      maxPrice,
      sortBy,
    };
    fetchPortfolioData(filterData);
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

  const getPaginationSequence = () => {
    let items = [];

    for (let pageNo = 1; pageNo <= totalPages; pageNo++) {
      items.push(
        <li
          key={pageNo}
          className={`page-item ${pageNo === currentPage && "active"}`}
        >
          <button className="page-link" onClick={() => setCurrentPage(pageNo)}>
            {pageNo}
          </button>
        </li>
      );
    }

    return items;
  };

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
          {loading ? (
            "Loading......"
          ) : (
            <div className="row mt-5 mx-0 justify-content-center align-items-center">
              {portfolioList.length ? (
                portfolioList.map((item, index) => (
                  <SinglePortfolio
                    key={index}
                    id={item.id}
                    imageSrc={item.imageSrc}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    onAddToCart={handleAddToCart}
                  />
                ))
              ) : (
                <p>No Portfolio available.</p>
              )}
            </div>
          )}

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
          {showAll && (
            <div className="row mt-3">
              <div className="col-12 d-flex align-items-center justify-content-end">
                <label className="me-2">Items:</label>
                <input
                  type="number"
                  min="1"
                  className="form-control me-2"
                  value={itemsPerPage}
                  style={{ width: "60px" }}
                  onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                />
                <nav
                  aria-label="Page navigation"
                  className="d-flex align-items-center"
                >
                  <ul className="pagination mb-0">
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Prev
                      </button>
                    </li>
                    {getPaginationSequence()}

                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
                <span className="ms-2"> {totalPages} pages</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
