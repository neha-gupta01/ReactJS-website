import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import { UserContext } from "../contexts/userContext";
import SignUpModal from "../auth/SignUpModal";
import LoginModal from "../auth/LoginModal";
import MyProfile from "./myProfile";

const Navbar = () => {
  const { toggleCart, cartItemsCount } = useContext(CartContext);
  const { userData, handleLogout, isLoggedIn } = useContext(UserContext);

  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleSignUpClose = () => setShowSignUp(false);
  const handleSignUpShow = () => setShowSignUp(true);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleProfileShow = () => setShowProfile(!showProfile);

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
                    {cartItemsCount ? (
                      <span className="badge bg-danger">{cartItemsCount}</span>
                    ) : null}
                  </button>
                </li>
                <li className="nav-item mx-2">
                  {isLoggedIn ? (
                    <React.Fragment>
                      <button
                        className="btn btn-outline-light"
                        onClick={handleProfileShow}
                      >
                        Hello, {userData.firstName}!
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <span className="text-light mx-2">Hello, Guest!!</span>
                      <button
                        className="btn btn-secondary"
                        onClick={handleLoginShow}
                      >
                        Login
                      </button>
                    </React.Fragment>
                  )}
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-light" onClick={handleSignUpShow}>
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* SignUp Modal */}
      <SignUpModal show={showSignUp} handleClose={handleSignUpClose} />

      {/* Login Modal */}
      <LoginModal show={showLogin} handleClose={handleLoginClose} />
    </React.Fragment>
  );
};

export default Navbar;
