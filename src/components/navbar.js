import React, { useState } from "react";
import Cart from "./cart";
import { Link } from "react-router-dom";

const Navbar = ({onAddToCart, cartItems}) => {
  const [showCart, setShowCart] = useState(false);
  
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <React.Fragment>
      <header className="bg-dark fixed-top">
        <nav className="container navbar navbar-expand-lg py-3 navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold fs-3" to="/">
              James Anderson
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/#skills">
                    SKILLS
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/portfolio">
                    PORTFOLIO
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/about">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/cv">
                    CURRICULUM VITAE
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/#contact">
                    CONTACT
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <button className="nav-link" onClick={toggleCart}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="badge bg-danger">0</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Cart isOpen={showCart} onClose={toggleCart}  />
    </React.Fragment>
  );
};

export default Navbar;
