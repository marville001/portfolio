import React from 'react'
// import avatar from '../img/avatar.png';
import me from '../img/me.png';
import {NavLink} from 'react-router-dom';

function Navbar({navClick}) {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={me} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item" onClick={navClick}>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={navClick}>
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={navClick}>
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={navClick}>
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={navClick}>
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        Martin @ 2021
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
