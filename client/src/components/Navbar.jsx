import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title, mode, text, toggleMode, notify }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthClick = () => {
    const newLoginState = !isLoggedIn;
    setIsLoggedIn(newLoginState);
    notify(newLoginState);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
          >
            {title}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/blog"
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <button
              className={`mx-3 bg-transparent border-0 text-${mode === "dark" ? "light" : "dark"}`}
              onClick={toggleMode}
              style={{ cursor: "pointer" }}
            >
              {text}
            </button>
            <button
              className={`btn btn-${mode === "light" ? "dark" : "light"}`}
              onClick={handleAuthClick}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
