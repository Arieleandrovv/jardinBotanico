import React, { useEffect, useState } from "react";
import Navbar from "./NavigationComponentsAdmin/Navbar";
import { AuthProvider, useAuth } from './AuthContext';
//import FooterExUser from "./NavigationComponentsExUser/FooterExUser";
//import "bootstrap/dist/css/bootstrap.css";
import '../styles/style.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { URL_BACKEND } from '../const';

const endpoint = URL_BACKEND;

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const navigate = navigate();

   
    return (
        <div>
          <Navbar />
          <div className="container login">
            <div className="heading">Iniciar Sesion: </div>
            <form action="" className="form" >
              <input
                required=""
                className="input"
                type="text"
                name="name"
                id="name"
                placeholder="Ingrese email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                required=""
                className="input"
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input className="login-button" type="submit" value="Iniciar Sesion" />
              {error && <div className="error-message">{error}</div>}
              <label>Si olvidaste la contraseña, contacta a la empresa.</label>
            </form>
            <span className="agreement"></span>
          </div>
        </div>
      );
}   
export default Login;