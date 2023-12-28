import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { URL_BACKEND } from '../../const';
import Sidebar from "../NavigationComponentsAdmin/Side";
import Navbar from "../NavigationComponentsAdmin/Navbar";
import Spinner from "../Spinner";
import { Editor } from '@tinymce/tinymce-react';

const endpoint = URL_BACKEND;

function Plantas() {
    const [name, setName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [type, setType] = useState("");
    const [currentPlantNames, setCurrentPlantNames] = useState([]);
    const [description, setDescription] = useState("");
    const [currentImageName, setCurrentImageName] = useState([]);
    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    const [nameError, setNameError] = useState("");

  const validateName = (value) => {
    const regex = /^[a-zA-Z ]*$/;
    return regex.test(value);
  };

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
    };

    const handleNameImageChange = (index, name) => {
        const updatedImages = [...images];
        updatedImages[index].name = name;
        setImages(updatedImages);
    };

    const handleDescriptionImageChange = (index, description) => {
        const updatedImages = [...images];
        updatedImages[index].description = description;
        setImages(updatedImages);
    };

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

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
    
        if (!validateName(value)) {
          setNameError("El nombre solo debe contener letras y espacios.");
        } else {
          setNameError("");
        }
      };



    const store = async (e) => {
        e.preventDefault();
        setIsLoading(true);
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
                setIsLoading(false);
                console.error('Error uploading image:', error);
                return null;
            }
        });

        const imageNames = (await Promise.all(promises)).flat();
        setCurrentImageName(imageNames[0].nameFile);
        const data = {
            name,
            scientificName,
            type,
            plantNames: [...currentPlantNames],
            description,
            imageNames,
        };

        await axios.post(`${endpoint}/new-plant`, data);
        setIsLoading(false);
        navigate('/plantas');
    };
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="d-flex flex-column align-items-center col-md-10">
                        <h1 className="mt-4 mb-4">Registro de Plantas</h1>
                        <div className="row col-md-10">
                            <div className="col-md-6">
                                {isLoading ? (
                                    <Spinner />
                                ) : (
                                    <div>
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={name}
                                                onChange={handleNameChange}
                                                placeholder="Nombre"
                                                className={nameError? "form-control is-invalid" : "form-control"}
                                            />
                                            {nameError && <p className="text-danger">{nameError}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="scientific"
                                                value={scientificName}
                                                onChange={(e) => setScientificName(e.target.value)}
                                                placeholder="Nombre Cientifico"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="type"
                                                value={type}
                                                onChange={(e) => setType(e.target.value)}
                                                placeholder="Tipo"
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <button type="button" onClick={handleAddPlantName}>
                                                Agregar Nombre
                                            </button>
                                        </div>
                                        {currentPlantNames.map((plant, index) => (
                                            <div key={index} className="mb-2">
                                                <div className="d-flex align-items-center">
                                                    <input
                                                        type="text"
                                                        value={plant}
                                                        onChange={(e) => handlePlantNameChange(index, e.target.value)}
                                                        placeholder={`Otro Nombre ${index + 1}:`}
                                                        className="me-2"
                                                    />
                                                    <button type="button" onClick={() => handleRemovePlantName(index)} className="btn btn-danger">
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                )}
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <Editor
                                        apiKey="7djxtbl1wqcvwy12bl846kkage2t8v547hupt6z4dzxs0t7f"
                                        init={{
                                            height: 400,
                                            menubar: false,
                                            plugins: [],
                                            toolbar:
                                                "undo redo | formatselect | bold italic backcolor forecolor \
                                                      alignleft aligncenter alignright alignjustify | \
                                                      bullist numlist outdent indent | removeformat"
                                        }}
                                        onEditorChange={(value) => setDescription(value)}
                                    />
                                </div>
                            </div>
                            <div className="row col-md-6 mt-2 mb-2">
                                <div className="mt-2">
                                    <button type="button" onClick={handleAddPlantImage}>
                                        Agregar Imagen
                                    </button>
                                </div>
                                {images.map((imageData, index) => (
                                    <div key={index}>
                                        <div>
                                            <input
                                                type="file"
                                                name={`image-${index}`}
                                                accept="image/*"
                                                onChange={(e) => handleImageChange(index, e.target.files[0])}
                                            />
                                            <div>{imageData.file && <img src={URL.createObjectURL(imageData.file)} alt="Imagen" />}</div>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder={`Nombre Imagen ${index + 1}`}
                                                value={imageData.name}
                                                onChange={(e) => handleNameImageChange(index, e.target.value)}
                                            />
                                            <input
                                                type="text"
                                                placeholder={`Descripción Imagen ${index + 1}`}
                                                value={imageData.description}
                                                onChange={(e) => handleDescriptionImageChange(index, e.target.value)}
                                            />
                                        </div>
                                        <button type="button" onClick={() => handleRemoveImage(index)}>
                                            Eliminar
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="row col-md-2 mt-2 mb-2">
                            <button onClick={store} className="btn btn-primary mt-3" disabled={isLoading}>
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Plantas;

