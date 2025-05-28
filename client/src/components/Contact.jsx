import React from "react";
import SmallBanner from "./SmallBanner";
import "../App.css";
import ContactCard from "./ContactCard";
import Form from "./Form";
import Map from "./Map";

const Contact = ({ mode }) => {
  let title = "Contact Us";

  return (
    <div className={`bg-${mode}`}>
      <SmallBanner
        title={title}
        mode={mode}
      />
      <div className={`container-fluid px-5 my-5 ${mode === "dark" ? "text-light" : "text-dark"} contact-padding`}>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3 className="fs-2 fw-bold">Let's Connect!</h3>
            <p className={`${mode === "dark" ? "text-light" : "text-dark"} mb-4`}>
              Your thoughts, questions, and feedback are what help us grow and improve Teak. Whether you've encountered an issue, have a suggestion,
              or just want to share your experience, we're here to listen. Reach out to us using the form below or through any of the other contact
              methods provided. Let's make your bookmarking experience even better, together.
            </p>
            <div className="mb-3">
              <ContactCard
                mode={mode}
                icon="at"
                text="support@teak.com"
              />
              <ContactCard
                mode={mode}
                icon="phone"
                text="+123 456 7890"
              />
              <ContactCard
                mode={mode}
                icon="location-dot"
                text="123 Teak Lane, Bookmark City, WebWorld"
              />
            </div>
          </div>
          <div className="col-md-6">
            <Form mode={mode} />
          </div>
        </div>
      </div>

      <div className="container-fluid px-0">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
