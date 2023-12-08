import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/plantas" className="nav-link">
              Lista de Plantas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/registroPlanta" className="nav-link">
              Registrar Planta
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
