import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { URL_BACKEND } from '../../const';
import Sidebar from "../NavigationComponentsAdmin/Side";
import Navbar from "../NavigationComponentsAdmin/Navbar";


const endpoint = URL_BACKEND;

function ShowListPlants() {
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

    const deletePlant = async (id) => {        
        const plantDeleted =await axios.delete(`${endpoint}/delete-plant/${id}`); 
        for (const image of plantDeleted.data.imageNames){
            await axios.delete(`${endpoint}/image/${image.nameFile}`);
        }
        fetchData();

    }

    return (
        <div>
        <Navbar />
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <h1>Listado de Plantas</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Nombre Científico</th>
                                <th>Tipo</th>
                                <th>Otros Nombres</th>
                                <th>Descripción</th>
                                <th>Aciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        {plants.map((plant) => (
                                    <tr key={plant.id}>
                                        <td>{plant.data.name}</td>
                                        <td>{plant.data.scientificName}</td>
                                        <td>{plant.data.type}</td>
                                        <td>{plant.data.plantNames.join(', ')}</td>
                                        <td>{plant.data.description}</td>
                                        <td>
                                        <Link to={`/editarPlanta/${plant.id}`}className="btn btn-primary">Editar</Link>
                                            <button onClick={ ()=>deletePlant(plant.id)} className="btn btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ShowListPlants;
