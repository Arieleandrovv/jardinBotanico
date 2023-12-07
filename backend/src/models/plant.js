class Plant {
    constructor(name, scientificName, type, description, plantNames) {
        this.name = name;
        this.scientificName = scientificName;
        this.type = type;
        this.description = description;
        this.plantNames = plantNames || [];
    }
    addIndiginousName(plantName) {
        this.plantNames.push(plantName);
    }
}
module.exports = Plant;