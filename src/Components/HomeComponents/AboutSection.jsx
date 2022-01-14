import React, { useEffect } from "react";
import Tittle from "../Tittle";
import me from "../../img/me.jpg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const AboutSection = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.5,
          stiffness: 120,
          bounce:0.1
        },
      });
    }
  }, [inView, animation]);
  return (
    <div
      ref={ref}
      className="container"
      id="about"
      
    >
      <motion.div  className="about"
      initial={{y: 100, opacity:0}}
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
