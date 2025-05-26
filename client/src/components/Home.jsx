import React from "react";
import Banner from "./Banner";
import One from "./One";

const Home = ({ mode }) => {
  return (
    <div>
      <Banner />
      <One mode={mode} />
    </div>
  );
};

export default Home;
