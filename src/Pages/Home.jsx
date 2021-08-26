import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";
import HeroSection from "../Components/HomeComponents/HeroSection";
const Home = () => {
  return (
    <div>
      <HeroSection />

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
