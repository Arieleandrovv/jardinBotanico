import React from "react";
import axios from 'axios';
import { useState } from 'react';
const endpoint = "http://localhost:4000/new-contact";

function Contactos() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const store = async (e) => {
        e.preventDefault();
        const data = {
            firstname,
            lastname,
            email,
            phone
        };
        await axios.post(endpoint, data);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhone("");
    };

    return (
    <div>
        <h1>Contactos</h1>
        <div>
            <form onSubmit={store}>
                <label>Nombre</label>
                <input type="text" name="firstname" onChange={(e)=> setFirstname(e.target.value)}/>
                <label>Apellido</label>
                <input type="text" name="lastname" onChange={(e)=> setLastname(e.target.value)}/>
                <label>Email</label>
                <input type="text" name="email" onChange={(e)=> setEmail(e.target.value)}/>
                <label>Telefono</label>
                <input type="text" name="phone" onChange={(e)=> setPhone(e.target.value)}/>
                <button type="submit">Guardar</button>
            </form>
        </div>
    </div>
    );
}
export default Contactos;