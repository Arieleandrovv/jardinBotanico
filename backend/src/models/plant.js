class Plant {
    constructor(name, scientificName, type, description, plantNames, imageName) {
        this.name = name;
        this.scientificName = scientificName;
        this.type = type;
        this.description = description;
        this.plantNames = plantNames || [];
        this.imageName = imageName;
    }
    addIndiginousName(plantName) {
        this.plantNames.push(plantName);
    }
}
module.exports = Plant;