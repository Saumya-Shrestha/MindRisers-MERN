import React from "react";
import "../App.css";

const Testimonial = ({ mode }) => {
  return (
    <div className={`bg-${mode} pb-5`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="my-4">
              <h1 className={`text-center pt-4 fs-1 fw-bold text-${mode === "dark" ? "light" : "dark"}`}>Testimonials</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="testimonial">
              <div className={`ts-item ${mode === "dark" ? "dark-ts-item" : ""}`}>
                <p className={`text-${mode === "dark" ? "light" : "dark"}`}>
                  Our stay at Hamro Luxury Hotel exceeded all expectations. The staff anticipated our every need, and the suite offered breathtaking
                  views of the city. The on-site restaurant serves exceptional cuisine, and the spa treatments were truly rejuvenating. This was the
                  perfect anniversary.
                </p>
                <div className="ti-author">
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h5 className={`text-${mode === "dark" ? "light" : "dark"} ms-2`}> - James & Emily Wilson</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
