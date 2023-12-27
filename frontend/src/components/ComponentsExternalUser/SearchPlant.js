import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { URL_BACKEND } from '../../const';
import NavbarExUser from "../NavigationComponentsExUser/NavbarExUser";
import FooterExUser from "../NavigationComponentsExUser/FooterExUser";
const endpoint = URL_BACKEND;

function Home() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
      try {
          const response = await axios.get(`${endpoint}/plants`);
          setPlants(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  return (
    <div>
      <div className="App">
        <NavbarExUser />
        <div className="container-fluid">
                        <h1 className="mt-4 mb-4">Listado de Plantas</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Nombre Científico</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                        {plants.map((plant) => (
                                    <tr key={plant.id}>
                                      <td><Link to={`/planta/${plant.id}`}className="btn btn-primary">{plant.data.name}</Link></td>                                        
                                        <td>{plant.data.scientificName}</td>
                                        <td>{plant.data.type}</td>                                      
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                
        </div>
        <FooterExUser />
      </div>
    </div>
  );
}
export default Home;