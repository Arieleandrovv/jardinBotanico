import React from "react";
import { URL_BACKEND } from '../const';
import portada from '../images/jardin portada.jpg';
import kiskina from '../images/uri uri real.jpeg';
import kiswara from '../images/kiswara2.jpg';
import NavbarExUser from "./NavigationComponentsExUser/NavbarExUser";
import FooterExUser from "./NavigationComponentsExUser/FooterExUser";
const endpoint = URL_BACKEND;

function Home() {

  return (
  
      <div className="App">
        <NavbarExUser />
        <div>
          <div>
          <img src={portada} alt="Jardin" className="w-100 p-8"  style={{ objectFit: "cover", maxWidth: 'auto', maxHeight: '180px' }} />
          <p class="title">BIENVENIDO AL JARDIN BOTANICO MARTIN CARDENAS</p>
          </div>
          
          <div class = "layout layout--onecol">
            <div class="layout__region layout__region --content">
              <div class="block block--what-is-in-bloom block-layout-builder block-inline-blockwhats-in-bloom">
                <div class="what-is-in-bloom">
                  <article class ="card card--without-cta card--what-is-in-bloom first-card" style={{ gridColumn:"1/span 2", gridRow:"2/span 1" }}>
                  <img src={kiswara} alt="kisquiña2" style={{ height:"100%", width:"100%"}}/>
                  </article>
                  <article class="card card--without-cta    card--what-is-in-bloom" ></article>
                  <article class="card card--without-cta card--what-is-in-bloom cta-card" style={{gridRow: "span 4"}}>
                  <img src={kiskina} alt="kisquiña" style={{ height:"100%", width:"auto"}}/>
                  </article>
                  
                  <article></article>
                  <article></article>
                  <article></article>
                  <article></article>
          </div>

          </div>
          </div>
          </div>

         
      
      </div>
      <FooterExUser />
    </div>
  );
}
export default Home;