import React from "react";
import Tittle from "../Tittle";
const ContactSection = () => {
  return (
    <div className="container" id="contact">
      <div className="contact">
        <Tittle title="Get In Touch" index="04" />
        <p className="contact-description">
          Do you have a cool project you want being done for you or do you have
          a project you want to collaborate with me? Then go ahead and hit me
          up. In case you also have a question feel free to contact me.
        </p>
        <div className="divs-container">
          <div className="contact-form">
            <div className="contact-form-inputs">
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="message">Message</label>
              <textarea id="message" cols="30" rows="5"></textarea>
            </div>
            <button className="send-btn">Send Message</button>
          </div>
          <div className="map-frame">
            <iframe
              title="hhh"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31917.662581582135!2d36.95639725!3d-0.426421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1642169179600!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
