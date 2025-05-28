import React from "react";
import FooterColumn from "./FooterColumn";
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";

const Footer = ({ mode }) => {
  return (
    <div className={`bg-${mode}`}>
      <div className="container">
        <footer className={`py-5 text-${mode === "light" ? "dark" : "light"}`}>
          <div className="row">
            <FooterColumn mode={mode} />
            <FooterColumn mode={mode} />
            <FooterColumn mode={mode} />
            <Newsletter mode={mode} />
          </div>
          <Copyright mode={mode} />
        </footer>
      </div>
    </div>
  );
};

export default Footer;
