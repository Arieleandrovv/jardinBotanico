import React from "react";
import { URL_BACKEND } from '../const';
import NavbarExUser from "./NavigationComponentsExUser/NavbarExUser";
import FooterExUser from "./NavigationComponentsExUser/FooterExUser";
const endpoint = URL_BACKEND;

function Home() {

  return (
    <div>
      <div className="App">
        <NavbarExUser />
        <div className="container-fluid">
          <h1>Home</h1>
          <p>Esta es la página de inicio</p>
        </div>
        <FooterExUser />
      </div>
    </div>
  );
}
export default Home;