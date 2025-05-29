import React from "react";
import FooterColumn from "./FooterColumn";
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";

const Footer = ({ mode }) => {
  return (
    <>
      <div className={`bg-${mode}`}>
        <div className="container">
          <footer className={`py-5 border-top text-${mode === "light" ? "dark" : "light border-secondary"}`}>
            <div className="row">
              <FooterColumn
                mode={mode}
                title="Hotel Information"
                customLinks={[
                  { text: "About Us", url: "/about" },
                  { text: "Location", url: "/location" },
                  { text: "Gallery", url: "/gallery" },
                  { text: "Awards", url: "/awards" },
                ]}
              />
              <FooterColumn
                mode={mode}
                title="Guest Services"
                customLinks={[
                  { text: "Reservations", url: "/reservations" },
                  { text: "Concierge", url: "/concierge" },
                  { text: "Airport Transfer", url: "/transfer" },
                  { text: "Room Service", url: "/room-service" },
                ]}
              />
              <FooterColumn
                mode={mode}
                title="Contact Us"
                customLinks={[
                  { text: "Phone", url: "tel:+1234567890" },
                  { text: "Email", url: "mailto:info@hamrohotel.com" },
                  { text: "Directions", url: "/directions" },
                  { text: "Feedback", url: "/feedback" },
                ]}
              />
              <Newsletter mode={mode} />
            </div>
            <Copyright mode={mode} />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
