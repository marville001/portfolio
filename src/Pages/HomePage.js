import React from "react";
import { faFacebook, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import fiverr from "../img/fiverr.png";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Martin Mwangi.</span>
        </h1>
        <p className="h-sub-text">
          From Web Components and UI/UX animations to React.JS, Redux, Vue.JS,
          and Node.JS. Check out my latest web software development portfolio
          projects.
        </p>
        <div className="icons">
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
            <img src={fiverr} alt="Fiverr" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
