import React from "react";

const AboutCard = ({ mode, image, title, text }) => {
  return (
    <>
      <div className={`col-md-6 card border-0 ${mode === "dark" ? "bg-dark" : "bg-white"}`}>
        <img
          className="card-img-top"
          loading="lazy"
          src={image}
          alt="Our Vision"
        />
        <div className={`card-body border border-top-0 p-4 ${mode === "dark" ? "border-black" : "border-white"}`}>
          <div className="card-title mb-3">
            <h2 className={`${mode === "light" ? "text-dark" : "text-light"}`}>{title}</h2>
          </div>
          <p className={`card-text mb-3 ${mode === "light" ? "text-dark" : "text-light"}`}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
