import React from "react";
import axios from 'axios';
import './css/fondo.css';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';

function Home() {
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
    axios.get('http://localhost:4000/contact').then((response) => {
      setContacts(response.data);
    });    
  }, []);
    return (
    <div>
      <Navbar/>
        {contacts.map((value,key)=>{
            return <div>{value.firstname}</div>
            })}
    </div>
    );
}
export default Home;