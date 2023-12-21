import React, { useState } from "react";
import axios from 'axios';
import { URL_BACKEND } from '../const';
import Sidebar from "./NavigationComponentsAdmin/Side";
import Navbar from "./NavigationComponentsAdmin/Navbar";

const endpoint = URL_BACKEND;

function Plantas() {
    const [name, setName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [type, setType] = useState("");
    const [currentPlantNames, setCurrentPlantNames] = useState([]);
    const [description, setDescription] = useState("");

    const handleAddPlantName = () => {
        setCurrentPlantNames([...currentPlantNames, ""]);
    };

    const handlePlantNameChange = (index, value) => {
        const updatedPlantNames = [...currentPlantNames];
        updatedPlantNames[index] = value;
        setCurrentPlantNames(updatedPlantNames);
    };

    const handleRemovePlantName = (index) => {
        const updatedPlantNames = [...currentPlantNames];
        updatedPlantNames.splice(index, 1);
        setCurrentPlantNames(updatedPlantNames);
    };

    const store = async (e) => {
        e.preventDefault();
        const data = {
            name,
            scientificName,
            type,
            plantNames: [...currentPlantNames],
            description
        };
        await axios.post(`${endpoint}/new-plant`, data);
    };

    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <h2 className="mt-4 mb-4 center">Registro de Plantas</h2>
                        <div className="d-flex flex-column ">
                            <form onSubmit={store} className="w-50">
                            <div className="formulario">
                                <div>
                                    <input type="text" name="name" placeholder="  Nombre  "value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div>
                                    <input type="text" name="scientific" placeholder= "  Nombre científico" value={scientificName} onChange={(e) => setScientificName(e.target.value)} />
                                </div>
                                <div>
                                    <input type="text" name="type" placeholder="  Tipo de planta" value={type} onChange={(e) => setType(e.target.value)} />
                                </div>
                                {currentPlantNames.map((plant, index) => (
                                    <div key={index}>
                                        <label>{`Otro Nombre ${index + 1}:`}</label>
                                        <input type="text" value={plant} placeholder="  Nombre " onChange={(e) => handlePlantNameChange(index, e.target.value)} />
                                        <button className="button" type="button" onClick={() => handleRemovePlantName(index)}>Eliminar</button>
                                    </div>
                                ))}
                                <div>
                                    <label>Otros Nombres  </label>
                                    <button className="button" type="button" onClick={handleAddPlantName}>  Agregar Nombre </button>
                                </div>
                            </div>
                                <div className="descripcion">
                                    <input type="text" name="description" placeholder=" Descripción " value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-outline-success mt-3">Guardar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plantas;

