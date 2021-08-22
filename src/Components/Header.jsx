import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className="header" style={{}}>
      <div className="header-content container">
        <Link to="/" className="logo">
          <span>Martin</span> Mwangi
        </Link>
        <nav className={navToggle ?"open":""}>
          <Link onClick={navClick} to="/portfolios">Portfolio</Link>
          <Link onClick={navClick} to="/resume">Resume</Link>
          <Link onClick={navClick} to="/about">About</Link>
          <Link onClick={navClick} to="/contact">Contact</Link>
        </nav>
        <div className="right-nav">
          <button className="challenges-btn">HIRE ME</button>

          <div className="nav-btn" onClick={navClick}>
            <div className="lines-1"></div>
            <div className="lines-2"></div>
            <div className="lines-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
