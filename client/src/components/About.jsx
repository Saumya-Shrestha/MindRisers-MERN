import React from "react";
import SmallBanner from "./SmallBanner";
import b1 from "../assets/b3.jpg";
import b2 from "../assets/b2.jpg";
import AboutCard from "./AboutCard";

const About = ({ mode }) => {
  let title = "About Us";

  return (
    <div className={`bg-${mode}`}>
      <SmallBanner
        title={title}
        mode={mode}
      />
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8">
              <h2 className={`display-5 mb-4 ${mode === "light" ? "text-dark" : "text-light"}`}>
                Our journey began with a dream of redefining how the world perceives design.
              </h2>
              <button
                type="button"
                className={`btn btn-lg btn-${mode === "light" ? "dark" : "light"} mb-3 mb-md-4 mb-xl-5`}
              >
                Discover More
              </button>
            </div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-4 gy-lg-0">
            <AboutCard
              mode={mode}
              image={b1}
            />
            <AboutCard
              mode={mode}
              image={b2}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
