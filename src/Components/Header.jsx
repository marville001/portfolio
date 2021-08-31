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
          <div className="close-btn"><span onClick={navClick}>X</span></div>
          <a className="home" onClick={navClick} href="/">Home</a>
          <a  onClick={navClick} href="/#about">About Me</a>
          <a onClick={navClick} href="/#services">Services</a>
          <a onClick={navClick} href="/#portfolio">Portfolio</a>
          <a onClick={navClick} href="/#contact">Contact</a>
          <a onClick={navClick} href="/#about">Blogs</a>
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
