const {db}=require('../firebase');
const Plant = require('../models/plant');

const getPlants = async (req, res) => {
    try {
        const plants = [];
        const querySnapshot = await db.collection('plants').get();

        querySnapshot.forEach(doc => {
            const plant = new Plant(
                doc.data().name,
                doc.data().scientificName,
                doc.data().type,                
                doc.data().description,
                doc.data().plantNames,
                doc.data().imageNames
            );

            const plantWithId = {
                id: doc.id,
                data: plant,
            };

            plants.push(plantWithId);
        });

        res.json(plants);
    } catch (error) {
        console.error('Error getting plants:', error);
        res.status(500).send('Error al obtener las plantas.');
    }
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
    const plantId = req.params.id;
    const updatedPlant = new Plant(
        req.body.name,
        req.body.scientificName,
        req.body.type,
        req.body.description,
        req.body.plantNames,
        req.body.imageNames
    );
    const plantsCollection = db.collection('plants');
    const plantDocRef = plantsCollection.doc(plantId);
    try {
        const plant = await plantDocRef.get();
        if (!plant.exists) {
            res.status(404).send('Planta no encontrada.');
            return;
        }
        await plantDocRef.update({
            name: updatedPlant.name,
            scientificName: updatedPlant.scientificName,
            type: updatedPlant.type,
            description: updatedPlant.description,
            plantNames: updatedPlant.plantNames,
            imageNames: updatedPlant.imageNames
        });
        res.send('Plant updated');
    } catch (error) {
        console.error('Error updating plant:', error);
        res.status(500).send('Error al actualizar la planta.');
    }
};

const deletePlant = async (req, res) => {
    const plantId = req.params.id;
    console.log("aqui esta el id del parametro" + plantId);
    const plantsCollection = db.collection('plants');
    const plantDocRef = plantsCollection.doc(plantId);

    try {
        const deletedPlant = await plantDocRef.get();

        if (!deletedPlant.exists) {
            res.status(404).send('Planta no encontrada.');
            return;
        }

        const deletedPlantData = deletedPlant.data();

        await plantDocRef.delete();
        console.log("planta eliminada" + deletedPlantData);
        res.send(deletedPlantData);

    } catch (error) {
        console.error('Error deleting plant:', error);
        res.status(500).send('Error al eliminar la planta.');
    }
};


const getPlant = async (req, res) => {    
    const querySnapshot = await db.collection('plants').doc(req.params.id).get();
    const plantDoc = new Plant(
        querySnapshot.data().name,
        querySnapshot.data().scientificName,
        querySnapshot.data().type,
        querySnapshot.data().description,
        querySnapshot.data().plantNames,
        querySnapshot.data().imageNames
    );
    res.json(plantDoc);
};

module.exports = {
    getPlants,
    createNewPlant,
    updatePlant,
    deletePlant,
    getPlant
};
