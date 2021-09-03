import React from 'react'

import resume from '../../assets/Martin Mwangi Wanjiku  CV.pdf'
import {motion} from "framer-motion"


const containerVariants = {
  hidden: {
    x: "200vh",
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  },
};

const buttonVariants = {
  hover: {
    textShadow: "0px 0px 8px var(--accentColor)",
    boxShadow: "0px 0px 8px var(--accentColor)",
    scale: 1.1,
  },
};

const HeroSection = () => {
    return (
        <motion.div className="home-hero container"
        variants={containerVariants}
        initial ="hidden"
        animate ="visible"
        transition={{
          type:"spring",
          stiffness: 120
        }}
        >
        <div className="details">
          <h2 className="greetings">Hi, my name is</h2>
          <h1 className="name">Martin Mwangi</h1>
          <h5 className="subtitle">I build things for the web.</h5>
          <p className="description">
            Am a fullstack javascript developer specializing in building (and
            occasionally designing) exceptional digital experiences. I graduated
            at Dedan Kimathi University of Technology with a 1st Class honor in
            Computer Science.
          </p>
          <motion.a target="_blank" rel="noreferrer" href={resume} download="resume.pdf" className="download-resume-btn"
           variants={buttonVariants}
           whileHover="hover"
          >Download Resume</motion.a>
        </div>
      </motion.div>
    )
}

export default HeroSection
