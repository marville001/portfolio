import React from "react";
import Tittle from "../Tittle";
import ProjectCard from "../ProjectCard";
import { Link } from "react-router-dom";

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
        <div className="contact-form">
          <div className="contact-form-inputs">
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="input-container">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="input-container">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea id="message" cols="30" rows="5"></textarea>
          </div>
          <button className="send-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
