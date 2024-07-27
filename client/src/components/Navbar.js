import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-custom">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/home">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/038/516/357/small_2x/ai-generated-eagle-logo-design-in-black-style-on-transparant-background-png.png" alt="BlogApp Logo" width="50" height="50" className="d-inline-block align-top" />
       
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home"><i>
              Home</i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
            <i> About</i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/new">
            <i>New Blog</i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
