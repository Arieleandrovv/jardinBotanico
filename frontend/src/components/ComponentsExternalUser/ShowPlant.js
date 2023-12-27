import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { URL_BACKEND } from '../../const';
import NavbarExUser from "../NavigationComponentsExUser/NavbarExUser";
import FooterExUser from "../NavigationComponentsExUser/FooterExUser";
import Spinner from "../Spinner";

const endpoint = URL_BACKEND;

function Planta() {
  const [name, setName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [type, setType] = useState("");
  const [currentPlantNames, setCurrentPlantNames] = useState([]);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [imagesLoaded, setImagesLoaded] = useState(false);



  useEffect(() => {
    const getPlantbyId = async () => {
        const response = await axios.get(`${endpoint}/plant/${id}`);
        setName(response.data.name);
        setScientificName(response.data.scientificName);
        setType(response.data.type);
        setCurrentPlantNames(response.data.plantNames);
        setDescription(response.data.description);
        setImages(response.data.imageNames);
        console.log(response.data.imageNames);
    }
    getPlantbyId();
}, []);

  useEffect(() => {
    const fetchImageUrls = async () => {
        const newImageUrls = [];
        for (const image of images) {
            const apiUrl = `${endpoint}/image/${image.nameFile}`;
            try {
                const response = await fetch(apiUrl);
                const url = await response.text();
                newImageUrls.push(url);
                console.log(images);
            } catch (error) {
                console.error('Error al obtener la URL de la imagen:', error);
            }
        }
        setImageUrl(prevImageUrl => [...prevImageUrl, ...newImageUrls]);
    };
    fetchImageUrls();
}, [images]);

  return (
    <div>
      <div className="App">
        <NavbarExUser />
        {isLoading ? (
          <div className="container-fluid">
            <h2>{name}</h2>
            <div className="container col-md-8 ">
              <div className="d-flex flex-row p-2"><p><strong>Tipo:</strong> {type}</p></div>
              <div className="d-flex flex-row">
                <div className="p-2" ><p><strong>Otros nombres:</strong></p></div>
                <div className="p-2">
                  {currentPlantNames.map((otherName, index) => (
                    <p key={index}>{otherName}</p>
                  ))}
                </div>
              </div>
              <div className="event-info-container">
                <div className="event-description" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: description }} />
              </div>
              <div>
                <div className="d-flex flex-row align-items-center justify-content-center">
                  {images? images.map((image, index) => (
                    <div className="col-md-4">
                    <img key={index} src={imageUrl[index]} alt={`Foto ${index + 1}`} style={{ maxWidth: '200px', margin: '5px' }} />
                    <p>{image.name}</p>
                    <p>{image.description}</p>
                    </div>
                  )): (
                    <Spinner />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
        <FooterExUser />
      </div>
    </div>
  );
}

export default Planta;