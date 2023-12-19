import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { URL_BACKEND } from '../../const';
import NavbarExUser from "../NavigationComponentsExUser/NavbarExUser";
import FooterExUser from "../NavigationComponentsExUser/FooterExUser";
import Spinner from "../Spinner";

const endpoint = URL_BACKEND;

function Planta() {
  const [plant, setPlant] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
    console.log(id);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${endpoint}/plant/${id}`);
      setPlant(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div className="App">
        <NavbarExUser />
        <div className="container-fluid">
          <h2>{plant.name}</h2>
          <div className="container col-md-8 ">
          <div className="d-flex flex-row p-2"><p><strong>Tipo:</strong> {plant.type}</p></div>
          <div className="d-flex flex-row">
            <div className="p-2" ><p><strong>Otros nombres:</strong></p></div>
            <div className="p-2">
              {plant.plantNames ? (
                plant.plantNames.map((otherName, index) => (
                  <p key={index}>{otherName}</p>
                ))
              ) : (
                <Spinner />
              )}
            </div>
          </div>
          <div className="event-info-container">
                <div className="event-description" style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: plant.description }} />
          </div>
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
        </div>
        <FooterExUser />
      </div>
    </div>
  );
}

export default Planta;