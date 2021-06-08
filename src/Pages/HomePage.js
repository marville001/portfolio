import React from "react";
import { faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Martin Mwangi.</span>
        </h1>
        <p className="h-sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          facere, numquam vitae placeat consequatur corrupti officia quibusdam.
          Blanditiis doloremque nemo ex facilis neque. A sint ipsam earum nemo
          omnis et.
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
        </div>
      </header>
    </div>
  );
}

export default HomePage;
