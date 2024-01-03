import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import { UserContext } from "../contexts/userContext";
import SignUpModal from "../auth/SignUpModal";
import LoginModal from "../auth/LoginModal";
import MyProfile from "./myProfile";

const Navbar = () => {
  const { toggleCart, cartItemsCount } = useContext(CartContext);
  const { userData, handleLogout, userLogin } = useContext(UserContext);

  const [showSignUp, setShowSignUp] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);

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
                  <button className="btn btn-light" onClick={handleSignUpShow}>
                    Sign Up
                  </button>
                </li>
                <li className="nav-item mx-2">
                  {userData ? (
                    <React.Fragment>
                      <button
                        className="btn btn-light"
                        onClick={handleProfileShow}
                      >
                        My Profile
                      </button>
                      <span className="text-light me-2">
                        Hello, {userData.firstName}!
                      </span>
                      <button
                        className="btn btn-secondary"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </React.Fragment>
                  ) : (
                    <button
                      className="btn btn-secondary"
                      onClick={handleLoginShow}
                    >
                      Login
                    </button>
                  )}
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
