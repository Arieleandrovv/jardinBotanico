import React from "react";
import axios from 'axios';
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
        {contacts.map((value,key)=>{
            return <div>{value.firstname}</div>
            })}
    </div>
    );
}
export default Home;