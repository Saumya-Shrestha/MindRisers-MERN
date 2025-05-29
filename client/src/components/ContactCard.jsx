import React from "react";

const ContactCard = ({ mode, icon, text }) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <span className={`mb-3 bg-${mode === "dark" ? "light" : "dark"} text-${mode === "dark" ? "dark" : "light"} contact-card`}>
          <i className={`fa-solid fa-${icon} me-2`}></i>
          <span>{text}</span>
        </span>
      </div>
    </>
  );
};

export default ContactCard;
