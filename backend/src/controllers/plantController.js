const {db}=require('../firebase');
const Plant = require('../models/plant');

const getPlants = async (req, res) => {
    const plants = [];
    const querySnapshot = await db.collection('plants').get();
    querySnapshot.forEach(doc => {
        const plant = new Plant(doc.data().name, doc.data().scientificName, doc.data().type, doc.data().plantNames ,doc.data().description, doc.data().imageNames);
        plants.push(plant);
    });
    res.send(querySnapshot.docs.map(doc => doc.data()));
};

const createNewPlant = async (req, res) => {
    const newPlant = new Plant(
        req.body.name,
        req.body.scientificName,
        req.body.type,
        req.body.description,
        req.body.plantNames,
        req.body.imageNames 
    );
    console.log(req.body.plantNames);
    const plantsCollection = db.collection('plants');

    const plantDocRef = await plantsCollection.add({
        name: newPlant.name,
        scientificName: newPlant.scientificName,
        type: newPlant.type,
        description: newPlant.description,
        plantNames: newPlant.plantNames,
        imageNames: newPlant.imageNames
    });
    res.send('New Plant created');
};

const updatePlant = async (req, res) => {
    res.json();
};

const deletePlant = async (req, res) => {
    res.json();
};
const getPlant = async (req, res) => {
    const plant = [];
    const querySnapshot = await db.collection('plants').doc(req.params.id).get();
    const plantDoc = new Plant(
        querySnapshot.data().name,
        querySnapshot.data().scientificName,
        querySnapshot.data().type,
        querySnapshot.data().description,
        querySnapshot.data().plantNames
    );
    plant.push(plantDoc);
    res.json(plant);
};

module.exports = {
    getPlants,
    createNewPlant,
    updatePlant,
    deletePlant,
    getPlant
};
