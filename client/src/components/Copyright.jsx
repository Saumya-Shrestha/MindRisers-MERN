import React from "react";

const Copyright = ({ mode }) => {
  return (
    <>
      <div className={`d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top ${mode === "dark" ? "border-secondary" : ""}`}>
        <p>© 2025 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a
              className={`link-${mode === "light" ? "body-emphasis" : "light"}`}
              href="#"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className={`link-${mode === "light" ? "body-emphasis" : "light"}`}
              href="#"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Copyright;
