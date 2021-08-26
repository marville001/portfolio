import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";
const Home = () => {
  return (
    <div>
      <div className="home-hero container">
        <div className="details">
          <h2 className="greetings">Hi, my name is</h2>
          <h1 className="name">Martin Mwangi</h1>
          <h5 className="subtitle">I build things for the web.</h5>
          <p>
            Am a fullstack javascript developer specializing in building (and
            occasionally designing) exceptional digital experiences. I graduated
            at Dedan Kimathi University of Technology with a 1st Class honor in
            Computer Science.
          </p>
          <div className="hero-btns">
            <Link className="download-resume-btn">Download Resume</Link>
            {/* <Link className="hire-me-btn">Hire Me</Link> */}
          </div>
        </div>
        <div className="hero-btns">
          <Link className="download-resume-btn">Download Resume</Link>
          <Link className="hire-me-btn">Hire Me</Link>
        </div>
      </div>
      <div className="services">
        <div className="container services-content">
          <h2>My Services</h2>
          <div className="services-cards">
            <ServiceCard
              image={design}
              title={"Web design"}
              text={"Design prototypes for your website using AdobeXD"}
            />
            <ServiceCard
              image={design}
              title={"Web Development"}
              text={
                "Transform your design into a working website using latest technologies"
              }
            />
            <ServiceCard
              image={intelligence}
              title={"Artificial Intelligence"}
              text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            />
            <ServiceCard
              image={gamedev}
              title={"Game Development"}
              text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
