import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div className="home-hero container">
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
          <Link className="download-resume-btn">Download Resume</Link>
        </div>
      </div>
    )
}

export default HeroSection
