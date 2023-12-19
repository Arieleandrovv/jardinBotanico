import React, { useState, useEffect } from "react";
import {useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { URL_BACKEND } from '../../const';
import NavbarExUser from "../NavigationComponentsExUser/NavbarExUser";
import FooterExUser from "../NavigationComponentsExUser/FooterExUser";

const endpoint = URL_BACKEND;

function Planta() {
    const [plant, setPlant] = useState([]);
    const {id} = useParams();

useEffect(() => {
    fetchData();
    console.log(plant);
    console.log(id); 
}, []);

const fetchData = async () => {
    try {        
        const response = await axios.get(`${endpoint}/plant/${id}`);
        setPlant(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

    return(
        <div>
      <div className="App">
        <NavbarExUser />
        <div className="container-fluid">
        <h2>{plant.name}</h2>
        <p><strong>Tipo:</strong> {plant.type}</p>
        {/*<p><strong>Descripción:</strong> {descripcion}</p>
        
        
        {nombresAlternativos && (
          <p>
            <strong>Nombres Alternativos:</strong> {nombresAlternativos.join(', ')}
          </p>
        )}
  
        {fotos && (
          <div>
            <strong>Fotos:</strong>
            <div>
              {fotos.map((foto, index) => (
                <img key={index} src={foto} alt={`Foto ${index + 1}`} style={{ maxWidth: '200px', margin: '5px' }} />
              ))}
            </div>
          </div>
              )}*/}
      </div>
        <FooterExUser />
      </div>
    </div>
    );
}

export default Planta;