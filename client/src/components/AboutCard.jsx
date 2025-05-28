import React from "react";

const AboutCard = ({ mode, image }) => {
  return (
    <div className="col-12 col-lg-6">
      <article>
        <div className={`card border-0 ${mode === "dark" ? "bg-dark" : ""}`}>
          <img
            className="card-img-top img-fluid m-0"
            loading="lazy"
            src={image}
            alt="Our Vision"
          />
          <div className={`card-body border p-4 ${mode === "dark" ? "bg-dark border-secondary" : "bg-white"}`}>
            <div className="entry-header mb-3">
              <h2 className="card-title entry-title h4 mb-0">
                <a
                  className={`${mode === "light" ? "link-dark" : "link-light"} text-decoration-none`}
                  href="#!"
                >
                  Our Vision
                </a>
              </h2>
            </div>
            <p className={`card-text entry-summary ${mode === "light" ? "text-secondary" : "text-light"} mb-3`}>
              From sleek modernism to timeless elegance, we infuse every creation with a touch of our artistic ingenuity. As a design agency, great
              design can shape perceptions, inspire action, and leave an indelible mark on the world.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AboutCard;
