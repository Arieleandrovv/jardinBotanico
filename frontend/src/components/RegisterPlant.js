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
    const uploadImage = async (e) => {
        e.preventDefault();
        const data = new FormData();
        const image = e.target.files[0];
        data.append('image', image);
        console.log(data);

        try {
            await axios.post(`${endpoint}/upload`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            // Handle error
            console.error('Error uploading image:', error);
        }
    };


    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <h1 className="mt-4 mb-4 center">Registro de Plantas</h1>
                        <div className="d-flex flex-column align-items-center">

                            <div>
                                <label>Nombre</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <label>Nombre Cientifico</label>
                                <input type="text" name="scientific" value={scientificName} onChange={(e) => setScientificName(e.target.value)} />
                            </div>
                            <div>
                                <label>Tipo</label>
                                <input type="text" name="type" value={type} onChange={(e) => setType(e.target.value)} />
                            </div>
                            {currentPlantNames.map((plant, index) => (
                                <div key={index}>
                                    <label>{`Otro Nombre ${index + 1}:`}</label>
                                    <input type="text" value={plant} onChange={(e) => handlePlantNameChange(index, e.target.value)} />
                                    <button type="button" onClick={() => handleRemovePlantName(index)}>Eliminar</button>
                                </div>
                            ))}
                            <div>
                                <label>Otros Nombres</label>
                                <button type="button" onClick={handleAddPlantName}>Agregar Nombre</button>
                            </div>
                            <div>
                                <label>Descripcion</label>
                                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <button onClick={store} className="btn btn-primary mt-3">Guardar</button>
                            <div>
                                <label>Subir Imagen</label>
                                <input type="file" name="image" id="imageInput" accept="image/*" required onChange={(e) => uploadImage(e)} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plantas;

