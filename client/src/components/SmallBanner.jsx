import React from "react";
import bg from "../assets/bg.jpg";

const SmallBanner = ({ title }) => {
  return (
    <div className="banner-container">
      <img
        className="small-banner"
        src={bg}
        alt="..."
        height={300}
      />
      <h4 className="title">{title}</h4>
    </div>
  );
};

export default SmallBanner;
