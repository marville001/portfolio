import React, { useEffect } from "react";
import Tittle from "../Tittle";
import me from "../../img/me.jpg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const AboutSection = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold:0 });

  useEffect(() => {
    console.log("In view", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          stiffness: 120
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "-100vw"
      });
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="container"
      id="about"
      
    >
      <motion.div  className="about"
      animate={animation}
      >
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
            initial={{ boxShadow: "0px 0px 8px var(--accentColor)" }}
          >
            <motion.img src={me} alt="Martin Mwangi Wanjiku" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
