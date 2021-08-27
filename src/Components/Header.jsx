import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <NavLink activeClassName="active" className="home" onClick={navClick} to="/">Home</NavLink>
          <NavLink activeClassName="active"  onClick={navClick} to="#portfolios">Portfolio</NavLink>
          <NavLink activeClassName="active" onClick={navClick} to="#resume">Resume</NavLink>
          <NavLink activeClassName="active" onClick={navClick} to="#blogs">Blogs</NavLink>
          <NavLink activeClassName="active" onClick={navClick} to="#about">About</NavLink>
          <NavLink activeClassName="active" onClick={navClick} to="#contact">Contact</NavLink>
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
