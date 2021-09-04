import React from "react";

import resume from "../../assets/Martin Mwangi Wanjiku  CV.pdf";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      when:"beforeChildren"
    },
  },
};

const buttonVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 120,
    },
  },
  hover: {
    textShadow: "0px 0px 8px var(--accentColor)",
    boxShadow: "0px 0px 8px var(--accentColor)",
    scale: 1.1,
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition:{
      delay: 0.5
    }
  },
};

const HeroSection = () => {
  return (
    <motion.div
      className="home-hero container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="details">
        <h2 className="greetings">Hi, my name is</h2>
        <h1 className="name">Martin Mwangi</h1>
        <h5 className="subtitle">I build things for the web.</h5>
        <motion.p
          className="description"
          variants={childVariants}
          initial="hidden"
          animate="visible"
        >
          Am a fullstack javascript developer specializing in building (and
          occasionally designing) exceptional digital experiences. I graduated
          at Dedan Kimathi University of Technology with a 1st Class honor in
          Computer Science.
        </motion.p>
        <motion.a
          target="_blank"
          rel="noreferrer"
          href={resume}
          download="resume.pdf"
          className="download-resume-btn"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Download Resume
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroSection;
