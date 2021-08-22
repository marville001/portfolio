import React from 'react'
import me from '../img/me-full.jpg'
import { faGithub, faFacebook, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import fiverr from "../img/fiverr.png";
const Home = () => {
  return (
    <div>
      <div className="home-hero container">
        <div className="details">
          <h1>Hi, am <span>Martin Mwangi</span></h1>
          <h5>A full stack web developer</h5>
          <p>Am a fullstack javascript developer with a degree in computer science. I graduated at Dedan Kimathi University of Technology with a 1st Class honor.</p>
          <div className="social-icons">
          <Link
            to={{ pathname: "https://www.facebook.com/marville001" }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>

          <Link
            to={{ pathname: "https://github.com/marville001" }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/marville001/" }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="icon yt" />
          </Link>
          <Link
            to={{ pathname: "https://www.twitter.com/marville001/" }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon tw" />
          </Link>
          <Link
            to={{ pathname: "https://www.fiverr.com/users/marville001/" }}
            target="_blank"
            className="icon-holder"
          >
            <img className="fv" src={fiverr} alt="Fiverr" />
          </Link>
          </div>
          <div className="languages">
            <div className="language">HTML5</div>
            <div className="language">CSS3</div>
            <div className="language">Vanilla.Js</div>
            <div className="language">React.Js</div>
            <div className="language">Node.Js</div>
            <div className="language">Express.Js</div>
            <div className="language">PHP</div>
            <div className="language">Python</div>
            <div className="language">MySql</div>
            <div className="language">Postgress</div>
            <div className="language">MongoDB</div>
          </div>
          <div className="hero-btns">
            <a className="download-resume-btn">Download Resume</a>
            <a className="hire-me-btn">Hire Me</a>
          </div>
        </div>
        <div className="image">
          <img src={me} alt="Martin Mwangi" />
        </div>
      </div>
      <div className="services">
      <div className="container services-content">
        <h2>Services</h2>
      </div>
      </div>
    </div>
  )
}

export default Home
