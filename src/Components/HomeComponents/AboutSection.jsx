import React from "react";
import Tittle from "../Tittle";
import me from "../../img/Martin.png";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "-200vh",
  },
  visible: {
    x: 0,
  },
};

const AboutSection = () => {
  return (
    <motion.div
      className="container"
      id="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{
        type: "spring",
        stiffness: 120,
        delay: 0.6,
      }}
    >
      <div className="about">
        <Tittle title="About me" index="01" />
        <div className="about-content">
          <div className="about-description">
            <p>
              Hello! My name is Martin and I enjoy creating things that live on
              the internet. My interest in web development started back in 2018
              when I started my studies in Computer Science just as a begginer
              in programming languages - turns out my appetite for web
              programming begun with a simple HTML & CSS! code
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working as an
              intern at a startup company. My main focus these days is building
              accessible, user-friendly and easy to use products for various
              clients
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <div className="languages">
              {[
                "HTML5 CSS3",
                "JavaScript (ES6+)",
                "ReactJs",
                "Node.Js",
                "Express.Js",
                "MySql DB",
                "PostGress",
                "MongoDB",
              ].map((skill) => (
                <motion.h3
                  whileHover={{
                    scale: 1.2,
                    originX: 0,
                    color: "var(--accentColor)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <div className="icon"></div>
                  {skill}
                </motion.h3>
              ))}
            </div>
          </div>
          <motion.div
            className="about-image"
            initial={{boxShadow:"0px 0px 8px var(--accentColor)"}}
            whileHover={{
              scale: 1.1,
              originX: 0
            }}
          >
            <motion.img src={me} alt="Martin Mwangi Wanjiku" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
