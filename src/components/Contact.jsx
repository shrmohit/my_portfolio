import React from "react";
import Contactform from "./Contactform";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-section">
        <h1>Contact</h1>
        <p>Free to Contact</p>
      </div>
      <div className="contactform">
        <Contactform />
      </div>
    </div>
  );
}

export default Contact;
