import React from "react";

const FooterColumn = ({ mode }) => {
  return (
    <div className="col-6 col-md-2 mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a
            href="#"
            className={`nav-link p-0 ${mode === "light" ? "text-body-secondary" : "text-light"}`}
          >
            Home
          </a>
        </li>
        <li className="nav-item mb-2">
          <a
            href="#"
            className={`nav-link p-0 ${mode === "light" ? "text-body-secondary" : "text-light"}`}
          >
            Features
          </a>
        </li>
        <li className="nav-item mb-2">
          <a
            href="#"
            className={`nav-link p-0 ${mode === "light" ? "text-body-secondary" : "text-light"}`}
          >
            Pricing
          </a>
        </li>
        <li className="nav-item mb-2">
          <a
            href="#"
            className={`nav-link p-0 ${mode === "light" ? "text-body-secondary" : "text-light"}`}
          >
            FAQs
          </a>
        </li>
        <li className="nav-item mb-2">
          <a
            href="#"
            className={`nav-link p-0 ${mode === "light" ? "text-body-secondary" : "text-light"}`}
          >
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterColumn;
