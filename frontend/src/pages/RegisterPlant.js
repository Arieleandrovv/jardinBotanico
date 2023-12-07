import React from "react";
import axios from 'axios';
import { useState } from 'react';
import { URL_BACKEND } from '../const';

const endpoint = URL_BACKEND;

function Contactos() {
    const [name, setName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [type, setType] = useState("");
    const [indiginousName, setIndiginousName] = useState("");
    const [description, setDescription] = useState("");

    const store = async (e) => {
        e.preventDefault();
        const data = {
            name,
            scientificName,
            type,
            indiginousName,
            description
        };
        await axios.post(`${endpoint}/new-plant` , data);

    };

    return (
    <div>
        <h1>Contactos</h1>
        <div>
            <form onSubmit={store}>
                <label>Nombre</label>
                <input type="text" name="firstname" onChange={(e)=> setName(e.target.value)}/>
                <label>Nombre Cientifico</label>
                <input type="text" name="lastname" onChange={(e)=> setScientificName(e.target.value)}/>
                <label>Tipo</label>
                <input type="text" name="email" onChange={(e)=> setType(e.target.value)}/>
                <label>Nombre Indigena</label>
                <input type="text" name="phone" onChange={(e)=> setIndiginousName(e.target.value)}/>
                <label>Descripcion</label>
                <input type="text" name="phone" onChange={(e)=> setDescription(e.target.value)}/>
                <button type="submit">Guardar</button>
            </form>
        </div>
    </div>
    );
}
export default Contactos;