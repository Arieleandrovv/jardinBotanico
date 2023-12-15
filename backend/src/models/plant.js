class Plant {
    constructor(name, scientificName, type, description, plantNames, imageNames) {
        this.name = name;
        this.scientificName = scientificName;
        this.type = type;
        this.description = description;
        this.plantNames = plantNames || [];
        this.imageNames = imageNames|| [[]];
    }
    addIndiginousName(plantName) {
        this.plantNames.push(plantName);
    }
}
module.exports = Plant;