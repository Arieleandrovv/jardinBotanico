const {db}=require('../firebase');
const Plant = require('../models/plant');

const getPlants = async (req, res) => {
    const plants = [];
    const querySnapshot = await db.collection('plants').get();
    querySnapshot.forEach(doc => {
        const plant = new Plant(doc.data().name, doc.data().scientificName, doc.data().type, doc.data().indiginousName ,doc.data().description);
        plants.push(plant);
    });
    res.json(querySnapshot.docs.map(doc => doc.data()));
};

const createNewPlant = async (req, res) => {
    const newPlant = new Plant(req.body.name, req.body.scientificName, req.body.type, req.body.indiginousName , req.body.description);
    await db.collection('plants').add({
        name: newPlant.name,
        scientificName: newPlant.scientificName,
        type: newPlant.type,
        indiginousName: newPlant.indiginousName,
        description: newPlant.description
    })    
    res.send('new Plant created');
};

const updatePlant = async (req, res) => {
    res.json();
};

const deletePlant = async (req, res) => {
    res.json();
};

module.exports = {
    getPlants,
    createNewPlant,
    updatePlant,
    deletePlant
};
