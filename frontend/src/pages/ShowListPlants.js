import React, { useEffect, useState } from "react";
import axios from 'axios';
import { URL_BACKEND } from '../const';

const endpoint = URL_BACKEND;

function ShowListPlants() {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        axios.get(`${endpoint}/plants`).then((response) => {
            setPlants(response.data);
        });
    }, []);

    return (
        <div>
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
                    {plants.map((plant, key) => (
                        <tr key={key}>
                            <td>{plant.name}</td>
                            <td>{plant.scientificName}</td>
                            <td>{plant.type}</td>
                            <td>{plant.plantNames.join(', ')}</td>
                            <td>{plant.description}</td>
                            <td>
                                <button className="btn btn-primary">Editar</button>
                                <button className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowListPlants;
