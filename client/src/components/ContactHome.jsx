import React from "react";
import Button from "./Button";
import "../App.css";

const ContactHome = ({ mode }) => {
  return (
    <>
      <div className={`bg-${mode} py-5`}>
        <div className={`container text-left d-flex justify-content-between align-items-center ${mode === "dark" ? "border-secondary" : ""}`}>
          <div>
            <h1 className={mode === "dark" ? "text-light" : "text-dark"}>Ready to Experience Luxury?</h1>
            <p className={mode === "dark" ? "text-light" : "text-dark"}>
              Whether you're planning a romantic getaway, family vacation, or business trip, <br />
              our concierge team is ready to create your perfect stay at Hamro Luxury Hotel.
            </p>
          </div>
          <div>
            <Button
              mode={mode}
              text="Contact Us"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHome;
