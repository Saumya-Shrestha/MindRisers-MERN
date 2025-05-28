import React from "react";
import b1 from "../assets/b1.jpg";
import "../App.css";

const One = (props) => {
  return (
    <div className={`bg-${props.mode} cardone`}>
      <div className="container py-5">
        <h4 className={`text-${props.mode === "light" ? "dark" : "light"} text-center py-3`}>This Is Our Service</h4>
        <div className="row">
          <div className="col-md-4">
            <div className={`card bg-${props.mode}`}>
              <img
                src={b1}
                className="card-img-top"
                alt="..."
              />
              <div className={`text-${props.mode === "light" ? "dark" : "light"} cardbody text-center py-3`}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a
                  href="#"
                  className={`btn btn-${props.mode === "light" ? "dark" : "light"}`}
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`card bg-${props.mode}`}>
              <img
                src={b1}
                className="card-img-top"
                alt="..."
              />
              <div className={`text-${props.mode === "light" ? "dark" : "light"} cardbody text-center py-3`}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a
                  href="#"
                  className={`btn btn-${props.mode === "light" ? "dark" : "light"}`}
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`card bg-${props.mode}`}>
              <img
                src={b1}
                className="card-img-top"
                alt="..."
              />
              <div className={`text-${props.mode === "light" ? "dark" : "light"} cardbody text-center py-3`}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a
                  href="#"
                  className={`btn btn-${props.mode === "light" ? "dark" : "light"}`}
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;
