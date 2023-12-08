import React from "react";
import { Link } from "react-router-dom"; 

const NavbarExUser = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Tu Logo</Link>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Buscar</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarExUser;