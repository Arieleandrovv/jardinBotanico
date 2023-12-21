import React from "react";
import { URL_BACKEND } from '../const';
import portada from '../images/jardin portada.jpg';
import kiskina from '../images/uri uri real.jpeg';
import kiswara from '../images/kiswara2.jpg';
import lloque from '../images/quewina.jpg';
import sewenqa from '../images/sewenqa.jpg';
import kiskis from '../images/kiswara.jpg';
import sewenqaa from '../images/sewenqa2.jpeg';
import quewinia from '../images/quewiña.jpg';
import NavbarExUser from "./NavigationComponentsExUser/NavbarExUser";
import FooterExUser from "./NavigationComponentsExUser/FooterExUser";
const endpoint = URL_BACKEND;

function Home() {

  return (
  
      <div className="App">
        <NavbarExUser />
        <div>
          <div className="titulo-img">
          <img src={portada} 
          alt="Jardin" 
          className="w-100 p-8"  
          style={{ objectFit: "cover", maxWidth: 'auto', maxHeight: '180px', opacity:"80%" }} />
          <h1 class="title">JARDÍN BOTÁNICO MARTÍN CÁRDENAS</h1>
          </div>
          <div>
            <article>

            </article>
          </div>
          
          <div class = "layout layout--onecol">
            <div class="layout__region layout__region --content">
              <div class="block block--what-is-in-bloom block-layout-builder block-inline-blockwhats-in-bloom">
                <div class="what-is-in-bloom">
                  <article class ="card card--without-cta card--what-is-in-bloom first-card" style={{gridColumn:"1/span 2", gridRow:"2 /span 2"}} >
                  <img src={quewinia} alt="kisquiña2" style={{ height:"100%", maxWidth:"auto"}}/>
                  </article>
                  <article class="card card--without-cta    card--what-is-in-bloom" style={{gridColumn:"3/ span 2", gridRow:"2 /span 1"}} >
                  <img src={kiskina} alt="kisquiña" style={{ height:"100%", maxmaxWidth:"100%"}}/>
                  </article>
                  <article class="card card--without-cta card--what-is-in-bloom cta-card" style={{gridColumn:"1/ span 6", gridRow:"1 /span 1"}}>
                  
                  </article>
                  
                  <article class="card card--without-cta card--what-is-in-bloom cta-card" style={{}}>
                  <img src={lloque} alt="kisquiña" style={{ height:"100%", maxWidth:"auto"}}/>
                  </article>

                  <article class="card card--without-cta card--what-is-in-bloom cta-card" style={{}}>
                  <img src={kiswara} alt="kisquiña" style={{ height:"100%", maxWidth:"auto"}}/>
                  </article>

                  
          </div>

          </div>
          </div>
          </div>         
      <FooterExUser/>
      </div>
     
    </div>
    
  );
}
export default Home;