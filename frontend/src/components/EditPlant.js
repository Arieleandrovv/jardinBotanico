import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
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
    const [imageUrl, setImageUrl] = useState([]);
    const [images, setImages] = useState([]);
    const [initImages, setInitImages] = useState([]);
    const [eliminatedImages, setEliminatedImages] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchImageUrls = async () => {
            const newImageUrls = [];
            for (const image of images) {
                const apiUrl = `${endpoint}/image/${image.nameFile}`;
                try {
                    const response = await fetch(apiUrl);
                    const url = await response.text();
                    newImageUrls.push(url);
                } catch (error) {
                    console.error('Error al obtener la URL de la imagen:', error);
                }
            }
            setImageUrl(prevImageUrl => [...prevImageUrl, ...newImageUrls]);
        };
        fetchImageUrls();
    }, [images]);

    ////////////////////////////////////////

    useEffect(() => {
        const getPlantbyId = async () => {
            const response = await axios.get(`${endpoint}/plant/${id}`);
            setName(response.data.name);
            setScientificName(response.data.scientificName);
            setType(response.data.type);
            setCurrentPlantNames(response.data.plantNames);
            setDescription(response.data.description);
            setImages(response.data.imageNames);
            setInitImages(response.data.imageNames);
        }
        getPlantbyId();
    }, []);

    const handleAddPlantImage = () => {
        setImages([...images, { file: null, name: "", description: "" }]);
    };

    const handleImageChange = (index, file) => {
        const updatedImages = [...images];
        updatedImages[index].file = file;
        console.log(file);
        setImages(updatedImages);

    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
        setEliminatedImages([...eliminatedImages, initImages[index]]);
    };

    const handleNameChange = (index, name) => {
        const updatedImages = [...images];
        updatedImages[index].name = name;
        setImages(updatedImages);
    };

    const handleDescriptionChange = (index, description) => {
        const updatedImages = [...images];
        updatedImages[index].description = description;
        setImages(updatedImages);
    };
    ////////////////////////////////////////

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

        const promises = images.map(async (imageData, index) => {
            const formData = new FormData();
            formData.append(`image-${index}`, imageData.file);
            formData.append(`name-${index}`, imageData.name);
            formData.append(`description-${index}`, imageData.description);
            try {
                const responseName = await axios.post(`${endpoint}/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                return responseName.data;
            } catch (error) {
                console.error('Error uploading image:', error);
                return null;
            }
        });

        const imageNames = (await Promise.all(promises)).flat();
        const data = {
            name,
            scientificName,
            type,
            plantNames: [...currentPlantNames],
            description,
            imageNames,
        };

        await axios.post(`${endpoint}/new-plant`, data);
    };

    const update = async (e) => {
        e.preventDefault();
        const promises = images.map(async (imageData, index) => {
            if (imageData.file) {
                await axios.delete(`${endpoint}/image/${initImages[index].nameFile}`);
                const formData = new FormData();
                formData.append(`image-${index}`, imageData.file);
                formData.append(`name-${index}`, imageData.name);
                formData.append(`description-${index}`, imageData.description);
                try {
                    const responseName = await axios.post(`${endpoint}/upload`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                    return responseName.data;
                } catch (error) {
                    console.error('Error uploading image:', error);
                    return null;
                }
            } 
            return null;           
        });

        const updatedImages = (await Promise.all(promises)).flat();
        
        const imageNames = [];
        for (let index = 0; index < updatedImages.length; index++) {
            if (updatedImages[index]===null) {
                imageNames.push(images[index]);
            }else {
                imageNames.push(updatedImages[index]);
            }
        }
        console.log(imageNames);
        const data = {
            name,
            scientificName,
            type,
            plantNames: [...currentPlantNames],
            description,
            imageNames
        };

        await axios.put(`${endpoint}/update-plant/${id}`, data);
    }
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
                            <div>
                                <label>Otros Nombres</label>
                                <button type="button" onClick={handleAddPlantName}>Agregar Nombre</button>
                            </div>
                            {currentPlantNames.map((plant, index) => (
                                <div key={index}>
                                    <label>{`Otro Nombre ${index + 1}:`}</label>
                                    <input type="text" value={plant} onChange={(e) => handlePlantNameChange(index, e.target.value)} />
                                    <button type="button" onClick={() => handleRemovePlantName(index)}>Eliminar</button>
                                </div>
                            ))}

                            <div>
                                <label>Descripcion</label>
                                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div>
                                <button type="button" onClick={handleAddPlantImage}>Agregar Imagen</button>
                            </div>
                            {images.map((imageData, index) => (
                                <div key={index}>
                                    <label>{`Subir Imagen ${index + 1}`}</label>
                                    <div>
                                        <input
                                            type="file"
                                            name={`image-${index}`}
                                            accept="image/*"
                                            onChange={(e) => handleImageChange(index, e.target.files[0])}
                                        />
                                        <div>
                                            {imageData.file ? (
                                                <img src={URL.createObjectURL(imageData.file)} alt="Imagen" />
                                            ) : (
                                                imageUrl[index] && <img src={imageUrl[index]} alt="Imagen" />
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder={`Nombre Imagen ${index + 1}`}
                                            value={imageData.name}
                                            onChange={(e) => handleNameChange(index, e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder={`Descripción Imagen ${index + 1}`}
                                            value={imageData.description}
                                            onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                        />
                                    </div>
                                    <button type="button" onClick={() => handleRemoveImage(index)}>Eliminar</button>
                                </div>
                            ))}

                            <div>
                                <button onClick={update} className="btn btn-primary mt-3">Actualizar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plantas;

