import "../../styles/style.css";
import React from "react";
import { URL_BACKEND } from '../../const';

import NavbarExUser from "../NavigationComponentsExUser/NavbarExUser";
import FooterExUser from "../NavigationComponentsExUser/FooterExUser";

import home1 from "../../images/home1.jpg";
import home2 from "../../images/home2.jpg";
import home4 from "../../images/home4.jpg";
import home5 from "../../images/home5.jpg";
import home6 from "../../images/home6.jpg";
import home7 from "../../images/home7.jpg";
import home8 from "../../images/home8.jpg";
import home9 from "../../images/home9.jpg";
import home10 from "../../images/home10.jpg";
import home12 from "../../images/home12.jpg";
import home13 from "../../images/home13.png";


const endpoint = URL_BACKEND;

function Home() {

  const handleMouseOver = (event) => {
    console.log("Mouse over image:", event.target.src);
  };

  const handleMouseLeave = () => {
    console.log("Mouse leave image");
  };

  return (
    <div>
      <div className="App">
        <NavbarExUser />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="mt-4 mb-4">Jardín Botánico Martín Cardenas</h1>
              <p className="text-justify">El Jardín Botánico Martín Cárdenas, es un espacio de conservación, investigación y educación ambiental, 
              que tiene como objetivo principal la conservación de la flora nativa de Bolivia, especialmente de la región de los valles interandinos, 
              así como también de la flora de otras regiones del país y del mundo. El Jardín Botánico Martín Cárdenas, es un espacio de conservación, 
              investigación y educación ambiental, que tiene como objetivo principal la conservación de la flora nativa de Bolivia, especialmente de la 
              región de los valles interandinos, así como también de la flora de otras regiones del país y del mundo.</p>
            </div>
          </div>
        </div>
        <h2>Galeria</h2>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-3 g-2">
            <div className="col">
              <img src={home1} className="img-fluid mb-2 imgWith" 
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}/>
              <img src={home4} className="img-fluid mb-2 imgWith" 
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}/>              
              <img src={home5} className="img-fluid mb-2 imgWith" 
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}/>
            </div>
            <div className="col">
              <img src={home2} className="img-fluid mb-2 imgWith" 
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}/>
              <img src={home6} className="img-fluid mb-2 imgWith" 
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}/>
              <img src={home7} className="img-fluid mb-2 imgWith" 
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}/>

            </div>
            <div className="col">
              <img src={home8} className="img-fluid mb-2 imgWith" 
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}/>
              <img src={home9} className="img-fluid mb-2 imgWith" 
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}/>
              <img src={home10} className="img-fluid mb-2 imgWith" 
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}/>
              <img src={home13} className="img-fluid mb-2 imgWith" 
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}/>
            </div>
          </div>
        </div>
        <FooterExUser />
      </div>
    </div>
  );
}
export default Home;