import React from "react";
import './css/navbar.css';
import './css/fondo.css';
import Logo from './imagenes/platita.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <div className="col-6 d-flex align-items">
          <img src={Logo} alt="Logo Jardin" className="img-fluid mx-3 JAR" style={{ maxWidth: '95%', height: 'auto' }} />
        </div>
        </Link>
        <ul className="nav-menu">  
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Historia
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              Buscar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Ingresar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    );

}
export default Navbar;