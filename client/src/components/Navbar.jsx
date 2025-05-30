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
            className={`${mode === "light" ? "light-accent-icon" : "dark-accent-icon"} navbar-brand`}
            to="/"
          >
            {title}
          </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
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
            className={`mx-3 bg-transparent border-0 ${mode === "light" ? "light-accent-icon" : "dark-accent-icon"}`}
            onClick={toggleMode}
            style={{ cursor: "pointer" }}
          >
            {text}
          </button>
          <button
            className={`btn btn-dark ${mode === "light" ? "light-accent-button" : "dark-accent-button"} px-4 py-2`}
            onClick={handleAuthClick}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
