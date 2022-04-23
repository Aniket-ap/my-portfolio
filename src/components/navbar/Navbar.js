import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo-links">
            <ImProfile size={30} style={{ marginRight: "10px" }} />
            <h1>Aniket Pradhan</h1>
          </Link>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" onClick={() => setClick(!click)} className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              onClick={() => setClick(!click)}
              className="nav-links"
            >
              Projects
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
