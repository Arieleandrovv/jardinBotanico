import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navigation.css";
import logo from "../../images/logo.png"; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-top" />
      </Link>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/plantas">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;