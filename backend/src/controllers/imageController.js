const path = require('path');
const fs = require('fs');
const { bucket } = require('../firebase');

const uploadImage = async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No se ha enviado ninguna imagen.');
        }

        const fileValues = [];

        for (const key in req.files) {
            const image = req.files[key];
            const extension = image.name.split(".").pop();
            
            const index = key.split('-')[1];
            const name = req.body[`name-${index}`];
            const nombreSinEspacios = name.replace(/\s/g, '-');
            const description = req.body[`description-${index}`];
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().replace(/:/g, '-');
            const fileName = `${formattedDate}-${nombreSinEspacios}.${extension}`;

            const uploadPath = path.join(__dirname, 'uploads', fileName);

            await image.mv(uploadPath);

            const remotePath = `images/${fileName}`;
            await bucket.upload(uploadPath, { destination: remotePath });

            fs.unlinkSync(uploadPath);

            fileValues.push({
                nameFile: fileName,
                name: name,
                description: description,
            });

        }

        res.send(fileValues);
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).send('Error al subir la imagen.');
    }
};



    const showImage = async (req, res) => {
        const options = {
            version: 'v2',
            action: 'read',
            expires: Date.now() + 1000 * 60 * 60
        };
        const filePath = `images/${req.params.name}`;
        const [url] = await bucket.file(filePath).getSignedUrl(options);

        res.send(url);
    };

    const deleteImage = async (req, res) => {
        const filePath = `images/${req.params.name}`;
        await bucket.file(filePath).delete();

        res.send('Image deleted successfully');
    };

    const updateImage = async (req, res) => {
        
    };
    
module.exports = {
    uploadImage,
    showImage,
    deleteImage
}