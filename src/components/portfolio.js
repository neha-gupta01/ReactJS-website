import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PortfolioMenu from "./portfolioMenu";
import { CartContext } from "../contexts/cartContext";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleCart, addToCart, updateQuantity } from "../redux/cartSlice";
import axios from "axios";

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

  // const dispatch = useDispatch();
  // const { cartItems } = useSelector((state) => state.cart.cartItems);
  const isInCart = cartItems && cartItems[id] !== undefined ? true : false;

  const handleAddToCartClick = () => {
    const item = { id, imageSrc, title, description, price, quantity: 1 };
    // dispatch(addToCart({ item }));
    onAddToCart(item);
    console.log(onAddToCart);
  };

  // const handleUpdateQuantity = (id, newQuantity) => {
  //   dispatch(updateQuantity({ id, newQuantity }));
  // };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 card-wrapper">
      <div className="card mt-4 shadow-sm ">
        <img src={imageSrc} className="img-fluid" alt="portfolio-img" />
        <div className="card-body text-center">
          <h6 className="card-title mb-2">{title}</h6>
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
  const [filterData, setFilterData] = useState({
    searchTitle: "",
    selectedTechnologies: [],
    minPrice: 0,
    maxPrice: 100,
    sortBy: "",
  });

  const { handleAddToCart, cartItems, handleUpdateQuantity } =
    React.useContext(CartContext);
  // const dispatch = useDispatch();
  // const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    fetchPortfolioData();
  }, [itemsPerPage, currentPage, filterData]);

  const fetchPortfolioData = () => {
    setLoading(true);
    let url = `http://localhost:3001/portfolio?current_page=${currentPage}&page_size=${itemsPerPage}`;

    if (filterData.searchTitle) {
      url = url + `&searchTitle=${filterData.searchTitle}`;
    }
    if (filterData.selectedTechnologies.length > 0) {
      url =
        url +
        `&selectedTechnologies=${filterData.selectedTechnologies.join(",")}`;
    }
    if (filterData.minPrice) {
      url = url + `&minPrice=${filterData.minPrice}`;
    }
    if (filterData.maxPrice) {
      url = url + `&maxPrice=${filterData.maxPrice}`;
    }
    if (filterData.sortBy) {
      url = url + `&sortBy=${filterData.sortBy}`;
    }
    axios
      .get(url)
      .then((response) => {
        setPortfolioList(response.data.data || []);
        setTotalPages(response.data?.paginate?.total_page || 0);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (currentPage === 1) {
      fetchPortfolioData();
    } else {
      setCurrentPage(1);
    }
  }, [itemsPerPage]);

  const onFilterChange = (
    searchTitle,
    selectedTechnologies,
    minPrice,
    maxPrice,
    sortBy
  ) => {
    setCurrentPage(1);
    const newFilterData = {
      searchTitle,
      selectedTechnologies,
      minPrice,
      maxPrice,
      sortBy,
    };
    setFilterData(newFilterData);
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
          {/* {showAll &&  portfolioList.length ? (
            <div className=" mt-3 mb-5 px-0 px-md-3 ">
              <div className="col-6 d-flex align-items-center justify-content-end ">
                <label className="me-2">Items:</label>
                <select
                  className="form-select me-2"
                  style={{ width: "80px" }}
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                >
                  <option value="4">4</option>
                  <option value="8">8</option>
                  <option value="12">12</option>
                  <option value="16">16</option>
                </select>
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
          ): null} */}
          {showAll && portfolioList.length ? (
  <div className="mt-3 mb-5 px-0 px-md-3">
    <div className="row">
      <div className="col-12 col-lg-8"></div>
      <div className="col-12 col-lg-4 d-flex justify-content-lg-end justify-content-center align-items-center">
        <div className="d-flex align-items-center w-100 justify-content-lg-end justify-content-center">
          <label className="me-2">Items:</label>
          <select
            className="form-select me-2"
            style={{ width: "80px" }}
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
          </select>
          <nav aria-label="Page navigation" className="d-flex align-items-center">
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
          <span className="ms-2 d-none d-lg-block"> {totalPages} pages</span>
        </div>
      </div>
    </div>
  </div>
) : null}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
