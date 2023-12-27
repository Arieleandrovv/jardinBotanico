import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navigation.css";
import logo from "../../images/logo.png"; 

const NavbarExUser = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-top" />
      </Link>
      <div className="navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Historia</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/buscarPlanta">Buscar</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Ingresar</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarExUser;