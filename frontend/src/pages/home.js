import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { URL_BACKEND } from '../const';
const endpoint = URL_BACKEND;

function Home() {
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
    axios.get(`{endpoint}/contact`).then((response) => {
      setContacts(response.data);
    });    
  }, []);
    return (
    <div>
        {contacts.map((value,key)=>{
            return <div>{value.firstname}</div>
            })}
    </div>
    );
}
export default Home;