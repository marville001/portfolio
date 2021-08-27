import React from "react";
import Tittle from "../Tittle";
import me from "../../img/me.png"

const AboutSection = () => {
  return (
    <div className="container">
      <div className="about">
        <Tittle title="About me" index="01" />
        <div className="about-content">
          <div className="about-description">
            <p>Hello! My name is Martin and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I started my studies in Computer Science just as a begginer in programming languages - turns out my appetite for web programming begun with a simple HTML & CSS! code</p>
            <p>Fast-forward to today, and I've had the privilege of working as an intern at a startup company. My main focus these days is building accessible, user-friendly and easy to use products for various clients</p>
            <p>Here are a few technologies I've been working with recently:</p>
            <div className="languages">
              <h3><div className="icon"></div>JavaScript (ES6+)</h3>
              <h3><div className="icon"></div>ReactJs</h3>
              <h3><div className="icon"></div>Node.Js</h3>
              <h3><div className="icon"></div>Express.Js</h3>
              <h3><div className="icon"></div>MySql DB</h3>
              <h3><div className="icon"></div>PostGress</h3>
              <h3><div className="icon"></div>MongoDB</h3>
            </div>
          </div>
          <div className="about-image">
            <img src={me} alt="Martin Mwangi Wanjiku" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
