import React, { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    boxShadow: "0px 0px 8px var(--accentColor)",
    scale: 1.1,
  },
};

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <motion.div
      className="header"
      style={{}}
      initial={{ y: -200 }}
      animate={{ y: 0 }}
    >
      <div className="header-content container">
        <Link to="/" className="logo">
          <span>Martin</span> Mwangi
        </Link>
        <nav className={navToggle ? "open" : ""}>
          <div className="close-btn">
            <span onClick={navClick}>X</span>
          </div>
          <a className="home" onClick={navClick} href="/">
            Home
          </a>
          <a onClick={navClick} href="/#about">
            About Me
          </a>
          <a onClick={navClick} href="/#services">
            Services
          </a>
          <a onClick={navClick} href="/#portfolio">
            Portfolio
          </a>
          <a onClick={navClick} href="/#contact">
            Contact
          </a>
          <a onClick={navClick} href="/#about">
            Blogs
          </a>
        </nav>
        <div className="right-nav">
          <a
            href="https://www.fiverr.com/martin_devs/create-node-js-reactjs-application"
            target="_blank"
            rel="noreferrer"
          >
            <motion.button
              className="challenges-btn"
              variants={buttonVariants}
              whileHover="hover"
            >
              HIRE ME
            </motion.button>
          </a>

          <div className="nav-btn" onClick={navClick}>
            <div className="lines-1"></div>
            <div className="lines-2"></div>
            <div className="lines-3"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
